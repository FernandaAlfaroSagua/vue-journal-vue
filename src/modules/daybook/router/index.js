export default {
  name: "daybook",
  path: "/daybook",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ "@/modules/daybook/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-entry" */ "@/modules/daybook/views/EntryView"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
