export default [ 
{ icon: "mdi-contacts", text: "Contacts", url: "/home2/project" },
      { icon: "mdi-history", text: "Frequently contacted", url: "/home2/tab" },
      { icon: "mdi-content-copy", text: "Duplicates", url: "/home2/cards" },
      { icon: "mdi-content_copy", text: "2col", url: "/home2/2col" },

     {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-help-circle', text: 'Help' },
        { icon: 'mdi-download', text: 'App downloads' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' }
]