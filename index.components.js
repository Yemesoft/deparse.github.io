Vue.component('library', {
    props: ['data'],
    template: '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><a v-bind:href="[data.name]"> {{ data.name }}</a><br/>{{data.description}}</div>'
});

Vue.component('section', {
    props: ['data'],
    template: '<div>{{ data.name }}<br/><library v-for="item in data.libraries"></library></div>'
});

Vue.component('libraries', {
    props: ['data'],
    template: '<div><section v-for="item in data">{{item.name}}</section></div>'
});