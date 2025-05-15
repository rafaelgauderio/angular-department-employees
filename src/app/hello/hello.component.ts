import { Component } from "@angular/core";

@Component({
    standalone:false, 
    selector: 'app-hello',
    templateUrl: './hello.component.html'
})

export class HelloComponent {
    name = "Rafael de Luca"
}

