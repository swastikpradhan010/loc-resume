import { LightningElement } from 'lwc';
import profpicURL from '@salesforce/resourceUrl/ProfilePicture';

export default class ResumeComponent extends LightningElement {
    get ProfilepicURL() {
        return profpicURL;
    }
    personalDetails = {
        name: 'Swastik Pradhan',
        email: 'swastikpradhan44@gmail.com',
        phone: '+918658726992',
        experience: '3 Years 5 Months',
        dob: '27-Feb-2000',
        gender: 'Male',
        city: 'Bhubaneswar, Odisha',
    };

    summary =
        'Salesforce Developer with a passion for providing innovative yet robust solutions. Skilled in Salesforce Administration and Development, Lightning and Aura Framework, Apex, etc. Experienced in providing business insights through data analysis.';

    technicalSkills = [
        'Apex Language',
        'Lightning Framework',
        'Aura Framework',
        'Visualforce Development',
        'SOQL, SOSL, DML',
        'CRM Analytics',
        'Flows',
        'Unit Testing',
    ];

    keySkills = [
        { name: 'Salesforce.com Administration', rating: '★★★★☆' },
        { name: 'Salesforce.com Development', rating: '★★★★★' },
        { name: 'CRM Analytics', rating: '★★★★☆' },
    ];

    workExperience = [
        {
            company: 'Principal Global Services',
            role: 'Software Engineer',
            dates: 'Aug 2022 - Present',
            bullet1:'•	Developed a custom Work Tracking Widget from the ground up, optimizing case page load times with a UI overhaul and task segmentation, reducing load time by 3 seconds.',
            bullet2:'•	Led the complete lifecycle of a Work Item Management solution, from discovery to successful delivery, streamlining processes for users and integrating with Salesforce Cases and Work Orders, resulting in a savings of 1.8 FTEs.',
            bullet3:'•	Implemented advanced Apex classes and triggers to automate business processes, boosting operational efficiency by 40%. Additionally, created Dashboards and Lightning components to visually represent key aspects of the automation.',
            bullet4:'•	Led the UI overhaul of the Contact page using Lightning Web Components (LWC), compiling data from multiple objects and presenting it in a user‑friendly, easily consumable format.',
            bullet5:'•	Designed and developed a solution for Salesforce Case registration into an external system, ensuring real‑time sync of case status and topic changes, eliminating system navigation for users with 98% efficiency.',
            bullet6:'•	Utilized Platform Events for seamless case registration, ensuring real-time updates across systems, and employed Custom Metadata for efficient registration and configuration of external systems. Additionally, implemented Custom Settings to allow admins to configure the solution without code changes, enhancing flexibility and scalability.',
            bullet7:'•	Authored detailed documentation on system architecture and development processes to ensure scalability and maintainability. Created user guides, conducted knowledge transfer sessions, and collaborated with cross‑functional teams to ensure seamless system interoperability.',
        },
        {
            company: 'Principal Global Services',
            role: 'Trainee Engineer',
            dates: 'Jul 2021 - Aug 2022',
            bullet1:'•	Developed a comprehensive tracking feature for Apex classes, Aura, and Lightning Web Components, enabling architects to identify and retire obsolete components.',
            bullet2:'•	Engineered a solution to enable service meeting in Salesforce, including backend Apex classes, LWC‑based frontend, and required setup configurations.',
            bullet3:'•	Led the effort to address and resolve potential security vulnerabilities identified by DigitSec , reducing the number of vulnerabilities by 50%.',
            bullet4:'•	Engineered a feature to generate a prioritized list of accounts needing attention, specifically targeting accounts that hadn’t had a meeting in over 11 months, saving 1,800 hours per year in manual account tracking and follow-up.',
            bullet5:'•	Created multiple interactive dashboards in Einstein Analytics, including leading the enhancement of the leadership dashboard, which improved its structure and provided more actionable insights, helping the business make data‑driven, impactful decisions.',
            
        },
        {
            company: 'High Radius Corporation',
            role: 'Intern',
            dates: 'Apr 2020 - Jun 2020',
            bullet1:'•	Contributed to the development and deployment of an AI-powered Fintech B2B cloud application.',
            bullet2:'•	Gained expertise across the entire product lifecycle, including user requirement gathering and design.',
            bullet3:'•	Designed exceptional user experiences and developed data and machine learning models.',
            bullet4:'•	Built UI components and robust backend architecture.',

        },
    ];

    education = [
        {
            degree: 'Bachelor of Technology',
            years: '2017-21',
            institution: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
            grade: '9.36 CGPA',
        },
        {
            degree: 'CBSE: 12th',
            years: '2017',
            institution: "Mother's Public School, Bhubaneswar",
            grade: '83%',
        },
        {
            degree: 'CBSE: 10th',
            years: '2015',
            institution: 'Delhi Public School, Sambalpur',
            grade: '10 CGPA',
        },
    ];
}
