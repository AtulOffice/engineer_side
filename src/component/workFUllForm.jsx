import React, { useState } from "react";
import { X, Briefcase, Calendar, MapPin, Users, FileText } from "lucide-react";

const EngineerWorkStatusFull = ({ project }) => {
    const userformval = {
        workstatus: "",
        currentEngineerName: "",
        projectName: "",
        engineerName: [],
        soType: "PROJECT",
        statusStartDate: "",
        statusEndDate: "",
        jobNumber: "",
        orderNumber: "",
        location: "",
        EndChecklist: "N/A",
        StartChecklist: "N/A",
        ExpensSubmission: "N/A",
        BackupSubmission: "N/A",
    };

    const [formData, setFormData] = useState(userformval);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (new Date(formData.statusStartDate) > new Date(formData.statusEndDate)) {
            alert("Start date must be before end date");
            return;
        }
        console.log("Form submitted:", formData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <div className="lg:ml-64 pt-20 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50/30 to-indigo-50 p-8">

            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 px-10 py-6 shadow-md rounded-xl flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                        Project Work Status
                    </h2>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-7xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* Project Information */}
                    <div className="bg-white rounded-xl p-6 shadow border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-indigo-600" />
                            Project Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Job Number */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    Job Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="jobNumber"
                                    value={formData.jobNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>

                            {/* Order Number */}
                            {formData.orderNumber && (
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-slate-700">
                                        Order Number
                                    </label>
                                    <input
                                        type="text"
                                        name="orderNumber"
                                        value={formData.orderNumber}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                    />
                                </div>
                            )}

                            {/* Project Name */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    Project Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="projectName"
                                    value={formData.projectName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                    required
                                />
                            </div>

                            {/* SO Type */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    SO Type
                                </label>
                                <select
                                    name="soType"
                                    value={formData.soType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                >
                                    <option value="PROJECT">PROJECT</option>
                                    <option value="SERVICE">SERVICE</option>
                                    <option value="MAINTENANCE">MAINTENANCE</option>
                                </select>
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" /> Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Checklist Section */}
                    <div className="bg-white rounded-xl p-6 shadow border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">
                            Checklist Status
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Start Checklist */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    Start Checklist
                                </label>
                                <select
                                    name="StartChecklist"
                                    value={formData.StartChecklist}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                >
                                    <option value="N/A">N/A</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>

                            {/* End Checklist */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    End Checklist
                                </label>
                                <select
                                    name="EndChecklist"
                                    value={formData.EndChecklist}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                >
                                    <option value="N/A">N/A</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>

                            {/* Expense Submission */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    Expense Submission
                                </label>
                                <select
                                    name="ExpensSubmission"
                                    value={formData.ExpensSubmission}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                >
                                    <option value="N/A">N/A</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>

                            {/* Backup Submission */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    Backup Submission
                                </label>
                                <select
                                    name="BackupSubmission"
                                    value={formData.BackupSubmission}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                >
                                    <option value="N/A">N/A</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Engineer Details */}
                    <div className="bg-white rounded-xl p-6 shadow border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-600" />
                            Engineer Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Current Engineer Name */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    Current Engineer Name
                                </label>
                                <input
                                    type="text"
                                    name="currentEngineerName"
                                    value={formData.currentEngineerName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                />
                            </div>

                            {/* All Engineers */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    All Engineers
                                </label>
                                <input
                                    type="text"
                                    name="engineerName"
                                    value={formData.engineerName.join(", ")}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Date Section */}
                    <div className="bg-white rounded-xl p-6 shadow border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-indigo-600" />
                            Work Duration
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* From */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    From <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="statusStartDate"
                                    value={formData.statusStartDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                    required
                                />
                            </div>

                            {/* To */}
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    To <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="statusEndDate"
                                    value={formData.statusEndDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Work Status Notes */}
                    <div className="bg-white rounded-xl p-6 shadow border border-slate-200">
                        <label className="block mb-2 text-sm font-semibold text-slate-700">
                            Work Status Details
                        </label>
                        <textarea
                            name="workstatus"
                            value={formData.workstatus}
                            onChange={handleChange}
                            rows="12"
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg resize-none"
                            placeholder="Enter detailed work status..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-12 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
                        >
                            Submit Work Status
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default EngineerWorkStatusFull;
