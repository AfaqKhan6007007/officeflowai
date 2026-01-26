import Image from "next/image";

export default function Modules() {
    return (
        <section className="py-12 bg-white dark:bg-gray-900" style={{backgroundImage: 'url("/background_modules.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-[#005143] dark:text-white mb-8 text-center">Everything Your Office Needs, All in One Platform</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">From HR to Finance to Sales, OfficeFlowAI simplifies every aspect of your business operations.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Module 1 */}
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition" style={{background:"white"}}>
                        <Image src="/hr-bg.png" alt="HR Management" width={369} height={369} className="mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">HR Management</h3>
                        <p className="text-gray-600 dark:text-gray-400">Automate onboarding, payroll and employee engagement with AI driven sentiment analysis.</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-8">
                            <li>Automated Payroll Processing</li>
                            <li>Leave & Attendance Tracking</li>
                            <li>Performance Reviews</li>
                        </ul>
                        <button className="mt-6 bg-[#DAF6E6] text-black px-26 py-4 rounded-lg font-bold hover:bg-[#baf0d2] transition shadow-xl">
                            Explore Module
                        </button>
                    </div>
                    {/* Module 2 */}
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition" style={{background:"white"}}>
                        <Image src="/finance-bg.png" alt="Finance Automation" width={369} height={369} className="mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Finance & Accounting</h3>
                        <p className="text-gray-600 dark:text-gray-400">Automate financial processes, expense management, and reporting with AI-powered insights.</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-2">
                            <li>Automated Expense Tracking</li>
                            <li>Real-Time Financial Reporting</li>
                            <li>Budget Forecasting & Invoice Management</li>
                        </ul>
                        <button className="mt-6 bg-[#DAF6E6] text-black px-26 py-4 rounded-lg font-bold hover:bg-[#baf0d2] transition shadow-xl">
                            Explore Module
                        </button>
                    </div>
                    {/* Module 3 */}
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition" style={{background:"white"}}>
                        <Image src="/procurement-bg.png" alt="Procurement" width={369} height={369} className="mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Procurement</h3>
                        <p className="text-gray-600 dark:text-gray-400">Streamline sourcing, vendor management, and purchase processes with AI-driven automation.</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-8">
                            <li>Automated Purchase Orders</li>
                            <li>Vendor Management & Tracking</li>
                            <li>Inventory & Cost Optimization</li>
                        </ul>
                        <button className="mt-6 bg-[#DAF6E6] text-black px-26 py-4 rounded-lg font-bold hover:bg-[#baf0d2] transition shadow-xl">
                            Explore Module
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Module 1 */}
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition" style={{background:"white"}}>
                        <Image src="/sales-bg.png" alt="Sales & Marketing" width={369} height={369} className="mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Sales & Marketing</h3>
                        <p className="text-gray-600 dark:text-gray-400">Boost revenue and streamline your sales process with AI-powered automation.</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-8">
                            <li>Lead Scoring & Management</li>
                            <li>Campaign Automation</li>
                            <li>Sales & Customer Insights</li>
                        </ul>
                        <button className="mt-6 bg-[#DAF6E6] text-black px-26 py-4 rounded-lg font-bold hover:bg-[#baf0d2] transition shadow-xl">
                            Explore Module
                        </button>
                    </div>
                    {/* Module 2 */}
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition" style={{background:"white"}}>
                        <Image src="/quality-bg.png" alt="Quality Management" width={369} height={369} className="mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Quality Management</h3>
                        <p className="text-gray-600 dark:text-gray-400">Ensure product excellence and operational efficiency with AI-driven quality management.</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-8">
                            <li>Real-Time Defect Tracking</li>
                            <li>Compliance & Standards Monitoring</li>
                            <li>Automated Quality Audits</li>
                        </ul>
                        <button className="mt-6 bg-[#DAF6E6] text-black px-26 py-4 rounded-lg font-bold hover:bg-[#baf0d2] transition shadow-xl">
                            Explore Module
                        </button>
                    </div>
                    {/* Module 3 */}
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition" style={{background:"white"}}>
                        <Image src="/operations-bg.png" alt="Finance Automation" width={369} height={369} className="mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Operations Management</h3>
                        <p className="text-gray-600 dark:text-gray-400">Optimize workflows and team performance with AI-powered operational tools.</p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-8">
                            <li>Resource Allocation & Planning</li>
                            <li>Workflow Automation</li>
                            <li>Performance & KPI Monitoring</li>
                        </ul>
                        <button className="mt-6 bg-[#DAF6E6] text-black px-26 py-4 rounded-lg font-bold hover:bg-[#baf0d2] transition shadow-xl">
                            Explore Module
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}