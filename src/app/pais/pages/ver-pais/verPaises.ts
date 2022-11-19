import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'cadena'
})
export class cadenaPipe implements PipeTransform{
    transform( object:any = []): any {
        return Object.values(object);
    }
}