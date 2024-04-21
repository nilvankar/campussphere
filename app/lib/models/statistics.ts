import mongoose from 'mongoose'
const user_Summary_schema = new mongoose.Schema({
    branchName: { type: String, required: true },
    DegreeCode: { type: String, required: true },
    CourseYear: { type: String, required: true },
    Section: { type: String, required: true },
    Male: { type: Number, required: true },
    Female: { type: Number, required: true },
    transporations: { type: Number, required: true },
    doms: { type: Number, required: true },
    total_count: { type: Number, required: true },
})

const vehical_summary = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    route_name: { type: String, required: true },
    max_capacity: { type: Number, required: true },
    allocated_capacity: { type: Number, required: true },
    staff_count: { type: Number, required: true },
    student_count: { type: Number, required: true },
    available_seats: { type: Number, required: true },
})

const domitory_summary = new mongoose.Schema({
    bulding_name: { type: String, required: true },
    type: { type: String, required: true, enum: ["Boys", "Girls"] },
    userId: { type: Number, required: true },
    userName: { type: String, required: true },
    degreeCode: { type: String, required: true },
    courseYear: { type: String, required: true },
    section: { type: String, required: true },
    floor_no: { type: Number, required: true },
    rom_no: { type: Number, required: true },
    bed_no: { type: Number, required: true },
    room_type: { type: String, required: true, enum: ["AC", "Non-Ac"] },
})
const toppers_summary = new mongoose.Schema({
    degreeCode: { type: String, required: true },
    courseYear: { type: String, required: true },
    section: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Enum"] },

    percentage: { type: Number, required: true },
    grade: { type: Number, required: true },
    CGPA: { type: Number, required: true },
    Rank: { type: Number, required: true },
})
const visitor_summary = new mongoose.Schema({
    s_no: { type: Number, required: true },
    courseYear: { type: String, required: true },
    section: { type: String, required: true },
    userName: { type: String, required: true },
    visitor_name: { type: String, required: true },
    dept: { type: String, required: true },
    date: { type: String, required: true },
    mobile_no: { type: Number, required: true },
    meeting_purpose: { type: String, required: true },
})

const teaching_plan_summary = new mongoose.Schema({
    subject: { type: String, required :true},
    less_no: { type:Number, required :true},
    less_name: { type: String, required :true},
    lesson_plan: { type: String, required :true},
    no_period: { type: Number, required :true},
    from_date: { type: String, required :true},
    to_date: { type: String, required :true},
})

export const user_summary=mongoose.model('user_summary',user_Summary_schema);
export const vehical_summary_schema=mongoose.model('vehical_summary',vehical_summary);
export const domitory_summary_schema=mongoose.model('domitory_schema',domitory_summary);
export const toppers_summary_Schema=mongoose.model('toppers_summary',toppers_summary)
export const visitor_summary_Schema=mongoose.model('visitor_summary',visitor_summary)
export const teaching_plan_summary_schema=mongoose.model('teaching_plan_summary',teaching_plan_summary)
