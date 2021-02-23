//MyComponent.js
export default {
    data: () => ({
        myDataProperty: null
    }),
    methods: {
        myMethod() {... }
    }
    // ...
}

//When we want to share the same properties between components, we can extract the common properties into a separate module:
// MyMixin.js
export default {
    data: () => ({
        mySharedDataProperty: null
    }),
    methods: {
        mySharedMethod() {... }
    }
}


//Now we can add this mixin to any consuming component by assigning it to the mixin config property. At runtime, Vue will merge the properties of the component with any added mixins.
// ConsumingComponent.js
import MyMixin from "./MyMixin.js";
export default {
    mixins: [MyMixin],
    data: () => ({
        myLocalDataProperty: null
    }),
    methods: {
        myLocalMethod() {... }
    }
}

//For this specific example, the component definition used at runtime would look like this:

export default {
    data: () => ({
        mySharedDataProperty: null
        myLocalDataProperty: null
    }),
    methods: {
        mySharedMethod() {... },
        myLocalMethod() {... }
    }
}