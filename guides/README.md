---
home: true
heroImage: /vueonrails.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Rails First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Happiness Always
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2015-present Bryan Lim
---

# Vue + Rails 💎

Related Projects: 
| Vue on Rails            | Vue           | Ruby on Rails       |  Webpacker |
| :---------------------: |:-------------:| :------------------:| :---------:|
|  [![Gem Version](https://badge.fury.io/rb/vueonrails.svg)](https://badge.fury.io/rb/vueonrails)|  [![npm version](https://badge.fury.io/js/vue.svg)](https://badge.fury.io/js/vue)| [![Gem Version](https://badge.fury.io/rb/rails.svg)](https://badge.fury.io/rb/rails)| [![Gem Version](https://badge.fury.io/rb/webpacker.svg)](https://badge.fury.io/rb/webpacker)


## What is Vue on Rails?
Vue on Rails is an integration support for Vue and its components inside Ruby on Rails. In short, it is Vue + Rails.

This guide serves as an open document to keep track of changes made to the Vue on Rails project and its integration. The purpose of this guide, is to make life easier for developers on both side.

## Setup Vue on Rails

At Gemfile
```
gem 'vueonrails'
```

Then run the following commands:
```
bundle
rails vue:setup
```

You can also use an [application template](/application-template) to automate this setup.


