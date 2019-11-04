<template>
  <v-app id="login" @keydown.enter="handleSubmit">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12" :loading="loading">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>{{ $t("Login") }}</v-toolbar-title>
                <v-spacer />
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn icon text v-on="on">
                      <v-icon> mdi-translate</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="lang in languages"
                      :key="lang"
                      @click="switchlang(lang)"
                    >
                      <v-list-item-title>{{ lang }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar>
              <v-card-text>
                <v-form ref="loginForm" lazy-validation>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                    v-model="form.userName"
                    :rules="rules.userName"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                    v-model="form.password"
                    :rules="rules.password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="handleSubmit">{{
                  $t("Enter")
                }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import * as login from "@/api/login";
export default {
  props: {
    source: String
  },
  data: () => ({
    loading: false,
    form: {
      userName: "",
      password: ""
    },
    rules: {
      userName: [v => !!v || "请填写用户名"],
      password: [v => !!v || "请输入密码"]
    }
  }),
  computed: {
    ...mapState(["languages"])
    // ...mapGetters(["changeRedDark", "switchcolor(color)", "switchlang(to)"])
  },
  methods: {
    handleSubmit() {
      if (this.$refs.loginForm.validate()) {
        this.loading = true;
        login
          .signIn(this.form)
          .then(re => {
            this.$store.dispatch("signIn", re);
            this.$store.dispatch("routerPermission", re.auth);
            this.$store.dispatch("rules", re.auth);
            this.$router.push("/");
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    switchlang(to) {
      switch (to) {
        case "中文":
          this.language = "中文";
          this.$i18n.locale = "zh-CN"; //关键语句
          break;
        case "English":
          this.language = "English";
          this.$i18n.locale = "en-US"; //关键语句
          break;
        default:
          break;
      }
    }
  }
};
</script>
