

const formValidation = (input) => {
    const errors = {}

    if(!input.name) {
        errors.name = 'Name required'
    } else if(input.name.length < 4){
        errors.name = 'Name required must be longer than 4 characters'
    }
    if(!input.height_min) {
        errors.height_min = 'Min Height required'
    } else if(input.height_min < 10 || input.height_min > 60){
        errors.height_min = "Min Height must be between 10 - 60"
    }
    if(!input.height_max) {
        errors.height_max = 'Max Height required'
    } else if(input.height_max <= input.height_min){
        errors.height_max = 'Max Height must be  higher than Min Height '
    } else if(input.height_max < 20 || input.height_max > 160){
        errors.height_max = 'Max Height must be between 20 - 160'
    }
    if(!input.weight_min) {
        errors.weight_min = 'Min Weight required'
    } else if(input.weight_min < 0 || input.weight_min > 90){
        errors.weight_min = 'Min Weight must be between 0 - 90'
    }
    if(!input.weight_max) {
        errors.weight_max = 'Max Weight required'    
    } else if(input.weight_max <= input.weight_min){
        errors.weight_max ='Max Weight must be higher than Min Weight'
    } else if(input.weight_max < 2 || input.weight_max > 130){
        errors.weight_max = 'Max Weight must be between 2 - 130'
    }

   
    //   if(errors.temperaments.length === 0) = 'At least one temperament required'
    // } else if(input.temperaments.length > 5){
    //     errors.temperaments = 'Max 5 temperaments allowed'
    // }

    // if(input.weight_max < input.weight_min) errors.weight_max = 'Max Weight cannot be lower than Min Weight'
    // if(input.weight_min > input.weight_max) errors.weight_min = 'Min Weight cannot be higher than Max Weight'
    // if(!input.life_span) errors.life_span = 'Life Span required'
    // if(!input.image) errors.image = 'Image required'
    return errors
}

export default formValidation;
