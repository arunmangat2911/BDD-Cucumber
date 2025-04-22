#!/usr/bin/env node
const report = require('multiple-cucumber-html-reporter');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const cucumberJsonDir = './cypress/test-results/cucumber-json';
const htmlReportDir = './cypress/test-results/finalResult';
const jsonIndentLevel = 2;

// Ensure directories exist
if (!fs.existsSync(htmlReportDir)) {
    fs.mkdirSync(htmlReportDir, { recursive: true });
}

// Debug: Check if JSON files exist before generating report
console.log(chalk.blue('🔍 Checking JSON files in:'), cucumberJsonDir);
const jsonFiles = fs.readdirSync(cucumberJsonDir).filter(file => file.endsWith('.json'));

if (jsonFiles.length === 0) {
    console.log(chalk.red('🚨 No JSON files found! Report will be empty.'));
} else {
    console.log(chalk.green('✅ JSON files found:'), jsonFiles);
}

// Function to generate report
function generateReport() {
    if (!fs.existsSync(cucumberJsonDir)) {
        console.warn(chalk.yellow(`WARNING: Folder '${cucumberJsonDir}' not found. REPORT CANNOT BE CREATED!`));
        return;
    }

    console.log(chalk.green('📢 Generating HTML report from JSON files...'));

    report.generate({
        jsonDir: cucumberJsonDir, // Path to JSON reports
        reportPath: htmlReportDir, // Path where report should be generated
        displayDuration: true,
        displayReportTime: true,
        pageTitle: 'System-Test Report',
        reportName: `System-Test Report – ${new Date().toLocaleString()}`,
        hideMetadata: false, // Ensure metadata is displayed in report
        metadata: {
            browser: {
                name: 'chrome',
                version: 'latest',
            },
            device: 'Jenkins Server',
            platform: {
                name: 'macOS',
                version: 'latest',
            },
        },
    });

    console.log(chalk.green(`✅ Report successfully generated at: ${htmlReportDir}/index.html`));
}

// Delay to allow JSON files to be fully written before report generation
setTimeout(generateReport, 5000); // 5-second delay
