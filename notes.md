1. Create project `ember new project-name`

1. Convert to pod pattern
    * Add `"usePods": true` to `.ember-cli`
    * Remove MVC folders `app/controllers`, `app/routes`, `app/models`
    * Move `app/templates/application.hbs` to `app/application/template.hbs`
    * Remove `app/templates` folder

1. Create the appliaction controller `ember g controller application`
   * Add main layout to `app/application/template.hbs`

1. Install ember sass `ember install ember-cli-sass`

1. Setup styles
   * Move `app/styles/app.css` to `app/styles/app.scss`
   * Create `layout.scss`, `header.scss`, and `ui.scss`
   * Import each style into `app.scss`

         // app/styles/app.scss
         @import "layout";
         @import "ui";
         @import "header";

1. Create "home" and "user" routes
   * `ember g route home`
   * `ember g route user`

1. Use `{{#link-to "route-name"}}Text{{/link-to}}` to create inpage anchors

1. Its possible to customize a route path

       this.route('user', { path: 'profile' });
1. Create nested routes with a slash

       ember g route user/followers
       ember g route user/following

1. Create default index users template

       ember g route user/index

