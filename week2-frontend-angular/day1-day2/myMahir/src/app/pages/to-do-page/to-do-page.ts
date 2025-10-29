import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.modules';
import { MatDialog } from '@angular/material/dialog';
import { AddDialog } from '../../components/add-dialog/add-dialog';
import { Data } from '../../services/data';

interface TodoItem {
  title: string;
  selected: boolean;
}

@Component({
  selector: 'app-to-do-page',
  imports: [...SharedModules],
  templateUrl: './to-do-page.html',
  styleUrl: './to-do-page.scss',
})
export class ToDoPage {
  public todoList: TodoItem[] = [];
  // { title: 'Do Laundry', selected: false },
  // { title: 'Wash Car', selected: false },
  // { title: 'Do Homework', selected: false },
  // { title: 'Football Training', selected: false },
  // { title: 'Night Hangout', selected: false },
  // { title: 'Call dude', selected: false },

  constructor(public dialog: MatDialog, private dataService: Data) {}

  onSelected(index: number) {
    this.todoList[index].selected = !this.todoList[index].selected;
    return this.dataService.setLocalStorage('todo', this.todoList);
  }

  onAdd() {
    console.log('Add button clicked');
    const dialogRef = this.dialog.open(AddDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Add button succeeded');
        this.todoList.push({ title: result, selected: false });
        this.dataService.setLocalStorage('todo', this.todoList);
      }
    });
  }

  onDelete(index: number) {
    let confirmation = confirm('Are you sure you want to delete this item');
    if (confirmation) {
      this.todoList.splice(index, 1);
      return this.dataService.setLocalStorage('todo', this.todoList);
    }
    return;
  }

  onClear() {
    this.dataService.clearStorage();
    this.todoList = [];
  }

  ngOnInit(): void {
    let data = this.dataService.getLocalStorage('todo');
    if (data) {
      this.todoList = JSON.parse(data);
      console.log(this.todoList);
    } else {
      this.todoList = [];
    }
  }
}
