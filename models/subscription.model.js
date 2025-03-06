import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: 0
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP'],
        default: 'USD'
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly']
    },
    category: {
        type: String,
        enum: ['sports', 'news', 'entertainment', 'technology', 'finance', 'politics'],
        required: [true, 'Category is required']
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment Method is required'],
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'cancelled'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: [true, 'Start Date is required'],
        validate :{
            validator: (value) => value<=new Date(),
            message: 'Start Date must be in Past'
        }
    },
    renewalDate: {
        type: Date,
        required: [true, 'Start Date is required'],
        validate :{
            validator: function(value){return value>=this.startDate},
            message: 'Renewal Date must be greater than Start Date'
        }
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: [true, 'User is required'],
        index: true        
    }
}, { timestamps: true });


subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriods ={
            daily : 1,
            weekly : 7,
            monthly : 30,
            yearly : 365
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    if(this.renewalDate > new Date()){
        this.status = 'active';
    }
    next();
});