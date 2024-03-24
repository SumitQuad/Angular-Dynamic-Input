import { Component, Directive, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true 
})

export class AppComponent {
  neWFields: any[] = []; // Corrected declaration
  editingIndex: number = -1; 
  title = 'my-app'; 
  ExistingArr = [
    {
      label: 'Name',
      field: 'Name',
      iconClass: 'ti ti-user',
      index: null,
      type: 'text',
      fieldsName: [
        {
          label: 'First Name',
          field: 'firstName',
          type: 'text',
          placeholder: 'First Name',
          helptext: '',
          isEdit: false,
          important: '',
          iTagClass: 'ti ti-cursor-text',
          originalValue: '',
          isNew: true,
        },
        {
          label: 'Last Name',
          field: 'lastName',
          type: 'text',
          placeholder: 'Last Name',
          isEdit: false,
          important: '',
          iTagClass: 'ti ti-cursor-text',
          originalValue: '',
          isNew: true,
        },
      ],
      isEdit: false,
      important: '',
      helptext: '',
      originalValue: 'Name',
    },
    {
      label: 'Billing Address',
      field: 'spreadsheet_input',
      iconClass: 'ti ti-calendar-plus',
      type: 'text',
      helptext: '',
      isEdit: false,
      important: '',
      iTagClass: 'ti ti-cursor-text',
      originalValue: 'Billing Address',
      isNew: true,
      placeholders: "Billing Address",
      fieldsName: [] // Initialize fieldsName property with an empty array
    },  
  ];

  addField(item: any, index: number): void {
    const newIndex = this.neWFields.length; // Get the new index based on the length of neWFields
    const fieldsName = item.fieldsName || []; 
    const newItem = { 
      ...item, 
      index: newIndex, 
      fieldsName: [...(item.fieldsName as any[]).map((field: any) => ({ ...field }))] 
    }; // Clone item and set the new index
    this.neWFields.push(newItem);
  
    console.log('Adding fields for:', newItem.index, newItem);
    console.log("New Fields", this.neWFields);
  }
  
  
  createNewField(newFieldIndex: number): void {
    console.log('Input field index:', newFieldIndex);
    console.log('neWFields[newFieldIndex]:', newFieldIndex, this.neWFields[newFieldIndex]);

    const field = this.neWFields[newFieldIndex];
    if (field) {
        // Toggle isEdit property
        field.isEdit = !field.isEdit;
        console.log('isEdit toggled to:', field.isEdit, 'for field:', field);

        // Check if the field is being edited
        if (field.isEdit) {
            // Set the editing index to the current field index
            this.editingIndex = newFieldIndex;
        } else {
            // Reset the editing index
            this.editingIndex = -1;
        }

        // Create only two fields (First Name and Last Name) on index basis
        field.fieldsName = [
            field.fieldsName[0], // First Name
            field.fieldsName[1]  // Last Name
        ];
    }
}

createNewFieldTwo(newFieldIndex: number): void {
  console.log('Input field index:', newFieldIndex);
  console.log('neWFields[newFieldIndex]:', newFieldIndex, this.neWFields[newFieldIndex]);

  const field = this.neWFields[newFieldIndex];
  if (field) {
    // Toggle isEdit property
    field.isEdit = !field.isEdit;
    console.log('isEdit toggled to:', field.isEdit, 'for field:', field);

    // Check if the field is being edited
    if (field.isEdit) {
      // Set the editing index to the current field index
      this.editingIndex = newFieldIndex;
    } else {
      // Reset the editing index
      this.editingIndex = -1;
    }
  }
}

getInputValue(indexOne: number, indexTwo: number, data: any): void {
  console.log('Old placeholder:', this.neWFields[indexOne].fieldsName[indexTwo].placeholder);
  console.log(data);
  console.log(indexOne);
  console.log(indexTwo);

  // Replace the placeholder of the specific field
  const updatedData = data;

  const fieldToUpdate = this.neWFields[indexOne].fieldsName[indexTwo];

  fieldToUpdate.placeholder = data;

  console.log('New placeholder:', fieldToUpdate.placeholder);
  console.log('Updated neWFields:', this.neWFields[indexOne]);
}



}

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule],
  bootstrap: [AppComponent]
})

export class AppModule {}
