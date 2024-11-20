import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storageUnit',
  standalone: true
})
export class StorageUnitPipe implements PipeTransform {

  transform(storageCapacity: number): string {
    if (storageCapacity >= 1000) {
      return `${(storageCapacity / 1000).toFixed(2)} TB`;
    }
    return `${storageCapacity} GB`;
  }

}
