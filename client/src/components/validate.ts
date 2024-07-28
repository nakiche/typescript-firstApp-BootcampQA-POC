const regexName = /^[a-zA-Z]+$/

interface inputs {
    name: string;
    lastName: string;
   }

interface errors {
    name: string;
    lastName: string;
   }

export default function Validate(inputs:inputs) {
    let errors:errors ={
        name: "",
        lastName: ""
    }
    
    //name validation
     if (!inputs.name) {
       errors.name = 'Name is required';
    }else if (inputs.name.length<3) {
       errors.name = 'Must contain at least 3 characters';
    }else if (!regexName.test(inputs.name)) { //a-Z checking
       errors.name = 'Invalid name given';
    }
    
    //last Name validation
    if (!inputs.lastName) {
        errors.lastName = 'Lastname is required';
     }else if (inputs.lastName.length<3) {
        errors.lastName = 'Must contain at least 3 characters';
     }else if (!regexName.test(inputs.lastName)) { //a-Z checking
        errors.lastName = 'Invalid lastname given';
     }
    return errors;
    }