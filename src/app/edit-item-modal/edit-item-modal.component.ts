import { Component, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent {

  @Input()
  item!: BudgetItem;

  onSubmitted(updatedItem: BudgetItem){
    
  }
}
