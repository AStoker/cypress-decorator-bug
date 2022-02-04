import { bindable, customAttribute } from 'aurelia';

@customAttribute({
    name: 'test-attribute'
})
export class TestAttribute {
    
    @bindable value;

    bound() {
        console.log(this.value);
    }

    valueChanged(newValue) {
        console.log(newValue);
    }
}