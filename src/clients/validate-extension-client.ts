class ValidationExtensionClient {
    public Validator: any;

    constructor(Validator: any) {
        this.Validator = Validator
        if (Validator.fields.length === 0) { 
            return
        }
        this.OnInitialise()
    }

    /**
     * Validate field by Accessing the 
     * vee-validate API
     * @param {Object} Validator - Vee-validate API
     * @param {Any} Input - Current field
     */
    public ValidateField(input: any, Validator: any): void {
        new Promise((resolve) => {
            const field = Validator.fields.find({ name: input.getAttribute('name') })
            if (!field) {
                return
            }
            Validator.validate(field.name).then(() => {
                resolve(true)
            }) 
            return
        })
    }

    /**
     * Resets the Vee-validation on field
     * @param {Object} Validator - Vee-validate API
     * @param {Any} Input - Current field
     */
    public ResetFieldValidation(input: any, Validator: any): void  {
        new Promise((resolve) => {
            const field = Validator.fields.find({ name: input.getAttribute('name') })
            if (!field) {
                return
            }
            field.reset()
            Validator.errors.remove(field.name, field.scope)
            resolve(true)
            return
        })
    }

    /**
     * Initialise on mounted
     * @param {Object} Validator - Vee-validate API
     * @param {Any} Input - Current field
     */
    public OnInitialise() {
        const inputs: any = document.getElementsByTagName('input');
        for (const input of inputs) {
            input.addEventListener('blur', this.ValidateField.bind(null, input, this.Validator), false)
            input.addEventListener('focus', this.ResetFieldValidation.bind(null, input, this.Validator), false) 
        }
    }
}

export default ValidationExtensionClient;