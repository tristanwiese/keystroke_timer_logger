import React from 'react'

import './report.css';

interface ReportType {
    report: string
}

const Report: React.FC<ReportType> = ({ report }) => {
    let parcer = new DOMParser();
    function stringToHTML(string: string): string {
        let htmlString = string.replace(/(?:\r\n|\r|\n)/g, '<br>');
        htmlString = htmlString.replace(/\t/g, '&emsp;&emsp;');
        return htmlString;
    }

    let html = parcer.parseFromString(stringToHTML(report), 'text/html');
    return (
        <div className='report' dangerouslySetInnerHTML={{ __html: stringToHTML(report) }}></div>
    )
}

export default Report