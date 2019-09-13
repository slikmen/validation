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
    public ValidateField(input: any) {
        return new Promise((resolve) => {
            const field = this.Validator.fields.find({ name: input.name })
            if (!field) {
                return
            }
            this.Validator.validate(field.name).then(() => {
                resolve(true)
            }) 
        })
    }

    /**
     * Resets the Vee-validation on field
     * @param {Object} Validator - Vee-validate API
     * @param {Any} Input - Current field
     */
    public ResetFieldValidation(input: any) {
        return new Promise((resolve) => {
            const field = this.Validator.fields.find({ name: input.name })
            if (!field) {
                return
            }
            field.reset()
            this.Validator.errors.remove(field.name, field.scope)
            resolve(true)
        })
    }

    /**
     * Initialise on mounted
     */
    public OnInitialise() {
        const inputs: any = this.Validator.fields
        for (const input of inputs) {
            const CanBeValidated: string = input.el.getAttribute('data-validate')
            if (!CanBeValidated) { 
                return
            }
            input.el.addEventListener('blur', this.ValidateField.bind(this, input), false)
            input.el.addEventListener('focus', this.ResetFieldValidation.bind(this, input), false) 
        }
    }
}

export default ValidationExtensionClient;