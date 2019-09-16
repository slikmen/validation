class ValidationExtensionClient {
    public Validator: any;
    private global: boolean;

    constructor(Validator: any, global: any) {
        this.Validator = Validator;
        this.global = global;
        if (Validator.fields.length === 0) { 
            return;
        }
        this.OnInitialise();
    }

    /**
     * Validate field by Accessing the 
     * vee-validate API
     * @param {Any} Input - Current field
     */
    public ValidateField(input: any) {
        return new Promise((resolve) => {
            // Find field in $validator
            const field = this.Validator.fields.find({ name: input.name });
            if (!field) {
                return;
            }
            // Validates the field again.
            this.Validator.validate(field.name).then(() => {
                resolve(true);
            }) 
        })
    }

    /**
     * Resets the Vee-validation on field
     * @param {Any} Input - Current field
     */
    public ResetFieldValidation(input: any) {
        return new Promise((resolve) => {
            // Find field in $validator
            const field = this.Validator.fields.find({ name: input.name })
            if (!field) {
                return;
            }
            // Resets field and removes error message
            field.reset();
            this.Validator.errors.remove(field.name, field.scope);
            resolve(true);
        })
    }

    /**
     * Initialise on mounted
     */
    public OnInitialise() {
        // Get inputs from components $validator
        const inputs: any = this.Validator.fields.items;
        for (const input of inputs) {
            // Checks on global option
            if (!this.global) {
                const CanBeValidated: any = input.el.getAttribute("data-validate");
                // if does not contain attribute ignore input
                if (!CanBeValidated) { 
                    continue;
                }
            }
            // Add events on inputs
            input.el.addEventListener('blur', this.ValidateField.bind(this, input), false);
            input.el.addEventListener('focus', this.ResetFieldValidation.bind(this, input), false);
        }
    }
}

export default ValidationExtensionClient;