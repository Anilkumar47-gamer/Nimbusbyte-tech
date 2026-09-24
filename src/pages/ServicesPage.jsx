import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MobileIcon,
  WebIcon,
  DesktopIcon,
  QaIcon,
  CloudIcon,
  SecurityIcon,
  RocketIcon,
  TerminalIcon,
  CheckIcon,
  ArrowRightIcon
} from '../components/Icons.jsx';

const qaCodeSnippets = {
  python: {
    lang: 'Python (PyTest + Playwright)',
    filename: 'test_mobile_and_web_matrix.py',
    code: `@pytest.mark.asyncio
@pytest.mark.parallel(workers=8)
async def test_omnichannel_checkout_flow():
    # 1. Automated API Pre-condition
    api = APIClient(base_url="https://api.enterprise.com")
    auth_token = await api.authenticate_service_account()
    order_id = await api.create_test_cart(auth_token, items=["SKU-CLOUD-99"])

    # 2. Cross-Browser Web Verification
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(f"https://app.enterprise.com/checkout/{order_id}")
        await page.click("[data-testid=confirm-payment]")
        assert await page.is_visible(".success-badge")
        await browser.close()

    # 3. Mobile Device Push Notification Assertion
    mobile = MobileAppiumDriver(platform="iOS")
    assert mobile.verify_push_received(f"Order #{order_id} Confirmed")`,
    metrics: 'Passed in 1.8s · 100% Assertion Match · Zero Flakiness'
  },
  java: {
    lang: 'Java (TestNG + Selenium + RestAssured)',
    filename: 'EnterpriseSuiteRunner.java',
    code: `package com.nimbusbyte.qa.automation;

import io.restassured.RestAssured;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.*;

public class EnterpriseSuiteRunner {
    @BeforeClass
    public void setupSuite() {
        RestAssured.baseURI = "https://api.enterprise.com/v1";
    }

    @Test(priority = 1, threadPoolSize = 6, invocationCount = 1)
    public void testHighThroughputOrderProcessing() {
        var response = RestAssured.given()
            .header("Authorization", "Bearer " + System.getenv("API_KEY"))
            .body("{\\"tenant\\": \\"nimbus\\", \\"load_rps\\": 5000}")
            .post("/transactions/simulate");

        Assert.assertEquals(response.getStatusCode(), 200);
        Assert.assertTrue(response.jsonPath().getLong("latency_ms") < 150);
    }
}`,
    metrics: 'Passed in 2.4s · Multi-Threaded Grid · All 24 Assertions OK'
  },
  typescript: {
    lang: 'TypeScript (Playwright + Cypress E2E)',
    filename: 'desktop-web-matrix.spec.ts',
    code: `import { test, expect } from '@playwright/test';
import { DesktopTauriDriver } from '@nimbus/desktop-test-kit';

test.describe('Nimbus Multi-Platform Integration Suite', () => {
  test('Cross-platform desktop & cloud state sync verification', async ({ page }) => {
    const desktopApp = await DesktopTauriDriver.launch();
    await desktopApp.performAction('TRIGGER_OFFLINE_QUEUE');
    
    await page.goto('https://cloud.nimbusbyte.com/telemetry');
    const syncStatus = page.locator('[data-testid=sync-state]');
    await expect(syncStatus).toHaveText('100% Synchronized', { timeout: 3000 });
    
    const memUsage = await desktopApp.getProcessMemoryMB();
    expect(memUsage).toBeLessThan(45);
  });
});`,
    metrics: 'Passed in 1.1s · TypeScript strict mode · 0 warnings'
  },
  csharp: {
    lang: 'C# / .NET (SpecFlow + NUnit + Playwright)',
    filename: 'FinancialComplianceSteps.cs',
    code: `using NUnit.Framework;
using TechTalk.SpecFlow;
using Microsoft.Playwright;
using System.Threading.Tasks;

namespace NimbusByte.QA.Compliance
{
    [Binding]
    public class FinancialComplianceSteps
    {
        private IPage _page;

        [Given(@"a compliant multi-region tenant exists")]
        public async Task GivenCompliantTenant()
        {
            var playwright = await Playwright.CreateAsync();
            var browser = await playwright.Chromium.LaunchAsync();
            _page = await browser.NewPageAsync();
        }

        [Then(@"the SOC 2 audit trail hash must be immutable")]
        public async Task ThenAuditTrailImmutable()
        {
            var auditHash = await _page.TextContentAsync("#audit-sha256");
            Assert.IsNotEmpty(auditHash);
            Assert.AreEqual(64, auditHash.Trim().Length);
        }
    }
}`,
    metrics: 'Passed in 0.9s · BDD Cucumber syntax · CI/CD Validated'
  }
};

const serviceData = [
  {
    id: 'mobile-app',
    num: '1',
    category: 'Mobile Engineering',
    title: 'Mobile Application Development',
    image: '/assets/mobile-engineering-showcase.svg',
    description: 'Native iOS & Android and high-performance cross-platform mobile apps engineered with Flutter, React Native, Swift, and Kotlin. We craft fluid, 60fps mobile experiences with offline SQLite caching, biometric auth, and reliable push engines.',
    techs: ['Flutter', 'React Native', 'Swift (iOS)', 'Kotlin (Android)', 'SQLite', 'App Store CI/CD', 'WebSockets', 'Push Notifications'],
    deliverables: ['App Store & Google Play Store release bundles', 'Modular Clean Architecture / MVVM codebase', 'Offline-first database sync & local encryption', 'Automated Appium / Maestro test automation harness'],
    features: [
      ['Native & Cross-Platform.', 'Built in Flutter or React Native for dual-platform velocity, or pure native Swift/Kotlin when extreme hardware access is required.'],
      ['Offline-First Architecture.', 'Optimistic UI updates and local data persistence keep your app running smoothly even on patchy cellular connectivity.'],
      ['Biometrics & FinTech Security.', 'Face ID, Touch ID, secure Keychain storage, and SSL pinning built to comply with financial-grade standards.'],
      ['Store Submission & CI/CD.', 'Automated Fastlane pipelines to build, sign, test, and release directly to TestFlight and Google Play Internal tracks.'],
    ]
  },
  {
    id: 'web-app',
    num: '2',
    category: 'Modern Full-Stack',
    title: 'Web Application Development',
    image: '/assets/web-application-showcase.svg',
    description: 'Enterprise web applications, customer-facing SaaS platforms, and internal operational portals built with React, Next.js, Node.js, and Python. We build for high throughput, sub-second latency, and effortless horizontal scaling.',
    techs: ['React', 'Next.js 15', 'TypeScript', 'Node.js', 'Python FastAPI', 'PostgreSQL', 'GraphQL', 'Redis'],
    deliverables: ['Production-grade source code with full test coverage', 'High-performance SSR / Edge-rendered architecture', 'OpenAPI & Swagger documentation', 'Complete Figma-to-code design system components'],
    features: [
      ['Enterprise SaaS Portals.', 'Multi-tenant architecture with role-based access control (RBAC), billing integrations, and analytics.'],
      ['High-Velocity Microservices.', 'Decoupled backend APIs in Node.js and Python FastAPI designed for zero-downtime rolling updates.'],
      ['Real-time Dashboards.', 'Live telemetry, WebSockets, and event streams that eliminate manual page refreshes.'],
      ['Legacy Modernization.', 'Step-by-step modular migration of legacy monoliths into modern Next.js/React applications without business disruption.'],
    ]
  },
  {
    id: 'desktop-app',
    num: '3',
    category: 'Cross-Platform Native',
    title: 'Desktop Application Development',
    image: '/assets/desktop-software-showcase.svg',
    description: 'Blazing fast, cross-platform desktop applications for Windows, macOS, and Linux built using Tauri, Electron, .NET 8 (WPF), and C++/Qt. We create desktop tools that leverage native OS APIs, hardware serial interfaces, and local compute.',
    techs: ['Tauri (Rust)', 'Electron.js', '.NET 8 / C#', 'C++ / Qt 6', 'Native OS APIs', 'Serial / USB Drivers', 'Auto-Updaters'],
    deliverables: ['Signed Windows (.msi/.exe), macOS (.dmg/Notarized), and Linux (.deb/.AppImage) installers', 'Native auto-update distribution infrastructure', 'Low-memory IPC communication layer', 'Hardware integration test suites'],
    features: [
      ['Tauri & Rust Performance.', 'Ultra-lightweight desktop applications with <40MB RAM footprints and near-instant launch times.'],
      ['Hardware & Device Communication.', 'Direct communication with USB, Serial COM, Bluetooth LE, and local peripheral devices.'],
      ['Secure Offline Execution.', 'Full standalone execution without internet dependency, utilizing encrypted local SQLite databases.'],
      ['Automated Code-Signing & Notarization.', 'Seamless Apple Developer notarization and Windows EV Code Signing for zero security warnings.'],
    ]
  },
  {
    id: 'automation-testing',
    num: '4',
    category: 'Quality Engineering',
    title: 'Multi-Language QA & Automation Testing',
    image: '/assets/qa-testing-matrix-showcase.svg',
    description: 'Comprehensive automated test suites spanning Python, Java, TypeScript, and C#. We automate Web, Mobile, Desktop, and API testing to eliminate regression bugs and enable confident multiple-deploys-per-day velocity.',
    techs: ['Python (PyTest)', 'Java (TestNG)', 'TypeScript (Playwright)', 'C# (SpecFlow)', 'Selenium Grid', 'Cypress', 'Appium Mobile', 'k6 Load Testing'],
    deliverables: ['End-to-End multi-browser test automation repository', 'Mobile device test matrix (iOS & Android)', 'Parallel CI/CD test execution pipeline', 'Automated test report dashboards with video recordings'],
    features: [
      ['Multi-Language Frameworks.', 'Automation tailored to your team\'s primary language — Python, Java, TypeScript, or C# — for seamless developer adoption.'],
      ['Cross-Platform & Browser Coverage.', 'Parallel execution across Chrome, Firefox, Safari, Edge, iOS devices, Android simulators, and Desktop apps.'],
      ['API & Performance Testing.', 'Automated REST/GraphQL validation and k6/JMeter load testing to verify system resilience under peak load.'],
      ['CI/CD Pipeline Integration.', 'Automated test suites triggered on pull requests with branch protection, preventing regressions before they reach production.'],
    ]
  },
  {
    id: 'cloud-consulting',
    num: '5',
    category: 'Cloud & DevOps',
    title: 'IT Consulting & Cloud Architecture',
    image: '/assets/it-consulting-strategy.svg',
    description: 'Strategic IT advisory, systems audits, and multi-cloud infrastructure design across AWS, Azure, and GCP. We audit your bottlenecks, eliminate single points of failure, and optimize infrastructure spend with tangible ROI.',
    techs: ['AWS', 'Azure', 'GCP', 'Kubernetes (EKS/AKS)', 'Terraform IaC', 'Docker', 'FinOps Cost Audit', 'System Architecture'],
    deliverables: ['Executive architectural health score & risk roadmap', 'Infrastructure as Code (IaC) Terraform repository', 'Multi-region disaster recovery runbooks', 'Cloud cost reduction blueprint (25–40% average savings)'],
    features: [
      ['Architecture Audits.', 'A thorough, ranked analysis of what is fragile, where you are overpaying, and how to scale safely.'],
      ['Zero-Downtime Cloud Migration.', 'Move workloads between on-premise servers and cloud providers with guaranteed business continuity.'],
      ['Kubernetes & Containerization.', 'Production-grade container orchestration with autoscaling, service meshes, and automated rollouts.'],
      ['Cost FinOps Optimization.', 'Strategic elimination of unallocated cloud resources and right-sizing reserved instances.'],
    ]
  },
  {
    id: 'security-compliance',
    num: '6',
    category: 'Protection & SOC',
    title: 'Cybersecurity, SOC & Compliance',
    image: '/assets/cyber-security-soc.svg',
    description: 'Pragmatic enterprise security and compliance preparation for growing businesses. We harden your attack surface, implement zero-trust access controls, and prepare your systems for SOC 2, ISO 27001, and HIPAA certifications.',
    techs: ['SOC 2 Type I/II', 'ISO 27001', 'GDPR / HIPAA', 'Zero Trust IAM', 'Penetration Testing', 'Vault Encryption', 'SIEM Monitoring'],
    deliverables: ['Compliance readiness gap analysis & action matrix', 'Auditor-ready evidence collection pipelines', 'Zero-trust least-privilege IAM configuration', 'Incident response runbooks with escalation tiers'],
    features: [
      ['Security Audits & Pen Testing.', 'Ethical vulnerability assessments across web, mobile, desktop apps, and cloud networks.'],
      ['Compliance Fast-Track.', 'Hands-on technical implementation to satisfy SOC 2, ISO 27001, or healthcare HIPAA requirements.'],
      ['Identity & Access Governance.', 'Role-based access policies and secrets management with HashiCorp Vault / AWS Secrets Manager.'],
      ['Incident Response Runbooks.', 'Battle-tested protocols for real-time containment, threat mitigation, and forensic logging.'],
    ]
  },
  {
    id: 'managed-support',
    num: '7',
    category: 'Ongoing Reliability',
    title: 'Managed IT Support & 24/7 DevOps',
    image: '/assets/managed-devops-sre.svg',
    description: 'Proactive engineering support and infrastructure monitoring for companies that require maximum uptime without managing a round-the-clock internal operations department.',
    techs: ['24/7 Monitoring', 'Prometheus', 'Grafana', 'PagerDuty', 'Disaster Recovery', 'SLA Guarantees', 'Patch Management'],
    deliverables: ['SLA-backed 24/7 uptime monitoring and incident response', 'Automated daily snapshots and verified restore routines', 'Priority engineering escalation hotline', 'Monthly performance, security, and spend reports'],
    features: [
      ['Proactive Monitoring.', 'Continuous telemetry watched 24/7 with alerts dispatched directly to senior on-call engineers.'],
      ['Guaranteed SLA Response.', 'Contractually backed response times for critical incidents with transparent escalation channels.'],
      ['Automated Backups & Drills.', 'Regular automated disaster recovery drills so data restoration is proven, not theoretical.'],
      ['Continuous Patching & Maintenance.', 'Zero-downtime updates and dependency vulnerability patching during low-traffic windows.'],
    ]
  }
];

const techSpotlights = {
  Mobile: {
    title: 'Mobile Application Architecture & Native Ecosystem',
    category: 'Mobile Engineering',
    lead: 'Enterprise iOS, Android, Flutter, and React Native applications engineered with offline SQLite persistence, biometric authentication, and fluid 60 FPS interfaces.',
    badges: ['Flutter 3.x', 'React Native 0.76+', 'Swift 6 (iOS)', 'Kotlin 2.0 (Android)', 'Offline SQLite', 'Fastlane CI/CD', 'Appium Mobile Grid'],
    metrics: ['25+ Published Apps', '60 FPS Fluid UX', '0% Offline Data Loss', 'Sub-400ms App Launch'],
    consultTopic: 'Mobile Application Development'
  },
  Web: {
    title: 'Full-Stack Modern Web & Cloud SaaS Engineering',
    category: 'Modern Full-Stack',
    lead: 'High-throughput Next.js 15, React 19, Node.js, and Python FastAPI web platforms engineered for sub-second search, multi-tenant RBAC, and horizontal elasticity.',
    badges: ['Next.js 15 (SSR / Edge)', 'React 19', 'Python FastAPI', 'PostgreSQL Multi-AZ', 'Redis In-Memory', 'GraphQL', 'Docker / Kubernetes'],
    metrics: ['Sub-100ms API Latency', '99.99% Availability', 'Multi-Tenant RBAC', 'Zero-Downtime Rollouts'],
    consultTopic: 'Web Application Development'
  },
  Desktop: {
    title: 'High-Performance Cross-Platform Desktop Software',
    category: 'Cross-Platform Native',
    lead: 'Lightweight, standalone desktop software in Tauri (Rust), Electron, and .NET 8 / C# with direct hardware serial communication and minimal memory overhead.',
    badges: ['Tauri (Rust)', 'Electron.js', '.NET 8 / C# WPF', 'C++ / Qt 6', 'Hardware Serial / USB', 'Delta Auto-Updaters', 'Win/macOS/Linux'],
    metrics: ['< 40MB RAM Footprint', '0.8ms I/O Latency', 'Standalone Offline DB', 'Signed & Notarized'],
    consultTopic: 'Desktop Application Development'
  },
  Python: {
    title: 'Python High-Velocity Backends & Automation Frameworks',
    category: 'Backend & Automation',
    lead: 'High-speed asynchronous Python FastAPI microservices, automated PyTest parallel test grids, Playwright E2E suites, and scalable data ETL pipelines.',
    badges: ['Python 3.12+ (AsyncIO)', 'FastAPI Microservices', 'PyTest Test Matrix', 'Playwright Python', 'SQLAlchemy / Pydantic', 'Celery Distributed Queue'],
    metrics: ['1,800+ Parallel Tests/Min', 'Sub-50ms API Response', '100% Async Coverage', 'Automated CI Gates'],
    consultTopic: 'Python Software & Automation'
  },
  Java: {
    title: 'Enterprise Java Microservices & Multi-Threaded QA Grid',
    category: 'Enterprise Backend & QA',
    lead: 'Robust TestNG, RestAssured, and Selenium Grid 4 test automation suites combined with thread-safe Java enterprise microservices engineered for high volume.',
    badges: ['Java 21 LTS', 'TestNG / JUnit 5', 'RestAssured API Engine', 'Selenium Grid 4', 'Spring Boot 3', 'Maven / Gradle CI Matrix'],
    metrics: ['100% Assertion Match', 'Multi-Threaded Parallel Execution', 'Contract Testing', 'Zero Flakiness SLA'],
    consultTopic: 'Java Engineering & QA Automation'
  },
  TypeScript: {
    title: 'End-to-End Type-Safe Full-Stack & Testing Harness',
    category: 'Full-Stack Type Safety',
    lead: 'Strict TypeScript across Next.js 15 frontends, Node.js microservices, shared Zod schemas, and modern Playwright/Cypress E2E test automation.',
    badges: ['TypeScript 5.x Strict', 'Next.js 15 App Router', 'Node.js Microservices', 'Playwright TS Matrix', 'Cypress E2E', 'Shared Zod Validation'],
    metrics: ['Zero Runtime Type Errors', 'Sub-Second E2E Tests', 'Shared Data Contracts', '100% Typed APIs'],
    consultTopic: 'TypeScript Full-Stack & QA'
  },
  'C#': {
    title: 'C# / .NET 8 Desktop & Enterprise SpecFlow BDD Suites',
    lead: 'Cross-platform .NET 8 desktop software, high-throughput WPF telemetry dashboards, and BDD Gherkin SpecFlow test automation frameworks.',
    badges: ['.NET 8 / C# 12', 'SpecFlow BDD (Cucumber)', 'NUnit / xUnit', 'Playwright .NET', 'WPF / MAUI', 'WinAppDriver Desktop QA'],
    metrics: ['Enterprise Certified', 'Cryptographic SHA-256 Audit', 'Native OS Interop', 'BDD Gherkin Specs'],
    consultTopic: 'C# .NET Software & Automation'
  },
  AWS: {
    title: 'Amazon Web Services Multi-Region Cloud & FinOps Architecture',
    category: 'Cloud Infrastructure',
    lead: 'Production AWS EKS Kubernetes clusters, Aurora Multi-AZ PostgreSQL, CloudFront CDN edge routing, Terraform IaC, and 25–40% FinOps cost optimization.',
    badges: ['AWS EKS / ECS', 'Aurora PostgreSQL Multi-AZ', 'Terraform IaC', 'AWS KMS Envelope Encryption', 'CloudWatch / Datadog SIEM', 'Auto-Scaling Groups'],
    metrics: ['99.99% Cloud SLA', '25%–40% Spend Savings', 'Zero-Downtime Migration', 'Multi-Region Failover'],
    consultTopic: 'AWS Cloud Architecture & Consulting'
  },
  Kubernetes: {
    title: 'Production Kubernetes Container Orchestration & GitOps',
    category: 'Cloud & DevOps',
    lead: 'Zero-downtime rolling deployments, automated pod horizontal autoscaling (HPA), Helm chart governance, and ingress routing across multi-cloud environments.',
    badges: ['Kubernetes 1.30+ (EKS/AKS)', 'Helm 3 Package Governance', 'ArgoCD GitOps', 'Prometheus & Grafana Monitoring', 'Traefik / NGINX Ingress', 'Docker Multi-Stage'],
    metrics: ['Zero-Downtime Rollouts', 'Sub-Second Ingress Routing', 'Auto-Healing Pods', 'Multi-Region Cluster Grid'],
    consultTopic: 'Kubernetes & DevOps Consulting'
  },
  'SOC 2': {
    title: 'SOC 2 Type II, ISO 27001 & Zero-Trust Compliance',
    category: 'Security & Governance',
    lead: 'Complete auditor readiness, HashiCorp Vault secrets management, automated SIEM audit logging, and zero-trust least-privilege IAM policies.',
    badges: ['SOC 2 Type I & II', 'ISO 27001 Certified Ready', 'Zero-Trust IAM', 'HashiCorp Vault Secrets', 'AWS KMS Encryption', 'Automated Auditor Evidence'],
    metrics: ['100% First-Pass Audit Success', 'Zero-Trust Role Enforcement', 'Automated Evidence Trail', 'Continuous SIEM Monitoring'],
    consultTopic: 'Cybersecurity & SOC 2 Compliance'
  }
};

function ServicesPage() {
  const [activeTechFilter, setActiveTechFilter] = useState('All');
  const [activeQaLang, setActiveQaLang] = useState('python');
  
  // Interactive Project & Tech Stack Estimator State
  const [projectDomain, setProjectDomain] = useState('Web Application (React / Next.js / Python)');
  const [projectScale, setProjectScale] = useState('Production SaaS (MVP to Scale)');
  const [qaTestingIncluded, setQaTestingIncluded] = useState(true);

  const getEstimate = () => {
    let timeline = '6–8 Weeks';
    let teamSize = '2 Senior Engineers + 1 QA Lead';
    let estSavings = '$1,500/mo';

    if (projectDomain.includes('Mobile')) {
      timeline = '8–10 Weeks';
      teamSize = '2 Mobile Engineers + 1 QA Automation Lead';
    } else if (projectDomain.includes('Desktop')) {
      timeline = '7–9 Weeks';
      teamSize = '2 Desktop Specialists + 1 QA Lead';
    } else if (projectDomain.includes('Automation Testing')) {
      timeline = '3–5 Weeks';
      teamSize = '2 Senior QA Automation Architects';
      estSavings = '$2,500/mo in manual testing time';
    } else if (projectDomain.includes('Cloud')) {
      timeline = '2–4 Weeks';
      teamSize = '1 Cloud Architect + 1 DevOps Lead';
      estSavings = '25%–40% Cloud Cost Savings';
    }

    if (projectScale.includes('Enterprise')) {
      timeline = '10–14 Weeks';
      teamSize = '3 Senior Engineers + 1 Principal Architect + 1 QA';
    }

    return { timeline, teamSize, estSavings };
  };

  const currentEst = getEstimate();

  const allTechs = ['All', 'Mobile', 'Web', 'Desktop', 'Python', 'Java', 'TypeScript', 'C#', 'AWS', 'Kubernetes', 'SOC 2'];

  const filteredServices = activeTechFilter === 'All'
    ? serviceData
    : serviceData.filter(s => {
        const filter = activeTechFilter.toLowerCase();
        const inCategory = s.category.toLowerCase().includes(filter);
        const inTitle = s.title.toLowerCase().includes(filter);
        const inDescription = s.description.toLowerCase().includes(filter);
        const inTechs = s.techs.some(t => t.toLowerCase().includes(filter));
        return inCategory || inTitle || inDescription || inTechs;
      });

  const currentSpotlight = activeTechFilter !== 'All' ? techSpotlights[activeTechFilter] : null;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
            <div className="eyebrow">Engineering &amp; Consulting Disciplines</div>
            <h1>Mobile, Web, Desktop &amp; Multi-Language Automation Testing.</h1>
            <p className="lead">NimbusByte delivers complete software engineering lifecycle solutions — from mobile and desktop applications to automated test matrices and enterprise cloud consulting.</p>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/services-overview-blueprint.svg"
              alt="NimbusByte Engineering Disciplines and Software Studio"
              className="hero-main-img"
            />
          </div>
        </div>
      </section>

      <svg className="trace-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,30 L220,30 L260,10 L440,10 L480,30 L720,30 L760,50 L980,50 L1020,30 L1200,30" />
        <path className="live" d="M0,30 L220,30 L260,10 L440,10 L480,30 L720,30 L760,50 L980,50 L1020,30 L1200,30" />
        <circle cx="260" cy="10" r="4" />
        <circle cx="760" cy="50" r="4" className="node-mint" />
        <circle cx="1020" cy="30" r="4" />
      </svg>

      {/* Engagement Options */}
      <section className="section-tight">
        <div className="wrap">
          <div className="section-head center" style={{ maxWidth: 640 }}>
            <div className="eyebrow">Engagement models</div>
            <h2>Tailored models for high-velocity software delivery.</h2>
            <p>Whether you need a full turnkey build, specialized multi-language automation testing, or ongoing DevOps retainer, we adapt to your roadmap.</p>
          </div>
          <div className="grid grid-3">
            <div className="card reveal">
              <div className="icon-node">
                <RocketIcon size={22} className="svg-anim-float" />
              </div>
              <span className="tag">TURNKEY BUILD</span>
              <h3>End-to-End Delivery</h3>
              <p>Full software development lifecycle from initial architecture and UI to code execution and deployment across Web, Mobile, or Desktop.</p>
              <div className="badge-row">
                <span className="badge">6–12 weeks</span>
                <span className="badge">Fixed milestone scope</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="icon-node">
                <QaIcon size={22} className="svg-anim-pulse" />
              </div>
              <span className="tag">QA &amp; RELIABILITY</span>
              <h3>Automation Testing Lab</h3>
              <p>Automate your regression testing in Python, Java, TypeScript, or C#. Includes API contract validation and CI/CD integration.</p>
              <div className="badge-row">
                <span className="badge">3–6 weeks</span>
                <span className="badge">100% test coverage</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="icon-node">
                <CloudIcon size={22} className="svg-anim-dash" />
              </div>
              <span className="tag">MANAGED IT &amp; SRE</span>
              <h3>Cloud &amp; SRE Retainer</h3>
              <p>Senior engineers on call 24/7 with SLA guarantees, automated backups, cost optimization, and proactive performance tuning.</p>
              <div className="badge-row">
                <span className="badge">Monthly retainer</span>
                <span className="badge">Guaranteed SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project & Tech Stack Estimator */}
      <section className="section-tight">
        <div className="wrap">
          <div className="calculator-box reveal">
            <div className="calculator-header">
              <div className="eyebrow">Interactive Project Estimator</div>
              <h2>Software &amp; Infrastructure Delivery Estimator</h2>
              <p>Select your technology stack, project scope, and QA automation preferences to receive an estimated timeline and team structure.</p>
            </div>
            <div className="calculator-grid">
              <div className="calculator-controls">
                <div className="form-field">
                  <label htmlFor="domain-select">Engineering Discipline &amp; Target Platform</label>
                  <select
                    id="domain-select"
                    value={projectDomain}
                    onChange={(e) => setProjectDomain(e.target.value)}
                  >
                    <option>Web Application (React / Next.js / Python)</option>
                    <option>Mobile Application (Flutter / React Native / iOS / Android)</option>
                    <option>Desktop Application (Tauri / Electron / .NET C#)</option>
                    <option>QA &amp; Multi-Language Automation Testing (Python / Java / TS)</option>
                    <option>IT Consulting &amp; Cloud Migration (AWS / Azure / GCP)</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="scale-select">Project Scale &amp; Complexity</label>
                  <select
                    id="scale-select"
                    value={projectScale}
                    onChange={(e) => setProjectScale(e.target.value)}
                  >
                    <option>Focused Feature Build / Audit (1-2 Modules)</option>
                    <option>Production SaaS (MVP to Scale)</option>
                    <option>Enterprise Multi-Platform Suite (Web + Mobile + Cloud)</option>
                  </select>
                </div>

                <div className="form-field">
                  <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={qaTestingIncluded}
                      onChange={(e) => setQaTestingIncluded(e.target.checked)}
                      style={{ width: 18, height: 18, accentColor: 'var(--mint)' }}
                    />
                    <span>Include Automated Regression Testing &amp; CI/CD Pipeline</span>
                  </label>
                </div>
              </div>

              <div className="calculator-result-card">
                <div className="result-metric">
                  <span className="result-label">Estimated Delivery Schedule</span>
                  <div className="result-value" style={{ fontSize: 'clamp(24px,2.8vw,32px)' }}>
                    {currentEst.timeline}
                  </div>
                  <p className="result-sub">Bi-weekly demo milestones with production test builds</p>
                </div>
                <div className="result-details">
                  <div className="detail-item">
                    <span>Assigned Team</span>
                    <strong>{currentEst.teamSize}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Testing Guarantee</span>
                    <strong>{qaTestingIncluded ? 'Automated E2E Suite' : 'Standard Manual QA'}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Expected ROI</span>
                    <strong>{currentEst.estSavings}</strong>
                  </div>
                </div>
                <Link
                  to={`/contact?service=${encodeURIComponent(projectDomain)}&scale=${encodeURIComponent(projectScale)}`}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Request Detailed Project Proposal <ArrowRightIcon size={14} className="btn-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Language QA Automation Interactive Matrix Lab */}
      <section className="section-tight" id="qa-matrix">
        <div className="wrap">
          <div className="qa-code-window reveal">
            <div className="qa-window-header">
              <div className="qa-window-dots">
                <span className="qa-dot red"></span>
                <span className="qa-dot yellow"></span>
                <span className="qa-dot green"></span>
                <span style={{ fontSize: 11, color: 'var(--slate-dim)', marginLeft: 8 }}>test_runner_{activeQaLang}.nimbusbyte — {qaCodeSnippets[activeQaLang]?.filename}</span>
              </div>
              <div className="qa-lang-switcher">
                <button
                  type="button"
                  className={`qa-lang-btn ${activeQaLang === 'python' ? 'active' : ''}`}
                  onClick={() => setActiveQaLang('python')}
                >
                  Python (PyTest)
                </button>
                <button
                  type="button"
                  className={`qa-lang-btn ${activeQaLang === 'java' ? 'active' : ''}`}
                  onClick={() => setActiveQaLang('java')}
                >
                  Java (TestNG)
                </button>
                <button
                  type="button"
                  className={`qa-lang-btn ${activeQaLang === 'typescript' ? 'active' : ''}`}
                  onClick={() => setActiveQaLang('typescript')}
                >
                  TypeScript (Playwright)
                </button>
                <button
                  type="button"
                  className={`qa-lang-btn ${activeQaLang === 'csharp' ? 'active' : ''}`}
                  onClick={() => setActiveQaLang('csharp')}
                >
                  C# (SpecFlow)
                </button>
              </div>
            </div>

            <div className="qa-code-content">
              <pre>{qaCodeSnippets[activeQaLang]?.code}</pre>
            </div>
            <div className="qa-runner-footer">
              <div className="qa-status-pill">
                <span className="qa-status-dot"></span>
                <span>{qaCodeSnippets[activeQaLang]?.metrics}</span>
              </div>
              <Link to="/contact?service=qa-automation" className="btn-link" style={{ fontSize: 13 }}>
                Need an automated QA suite built? Talk to us <ArrowRightIcon size={12} className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Filter Pills */}
      <div className="wrap" style={{ marginTop: 32 }}>
        <div className="tech-filter-bar reveal">
          <span className="filter-label">Filter by Technology:</span>
          <div className="filter-buttons">
            {allTechs.map(tech => (
              <button
                key={tech}
                type="button"
                className={`filter-btn ${activeTechFilter === tech ? 'active' : ''}`}
                onClick={() => setActiveTechFilter(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Technology Spotlight Details Card when filtered */}
        {currentSpotlight && (
          <div className="tech-spotlight-card reveal" style={{ marginTop: 20 }}>
            <div className="tech-spotlight-content">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                <span className="tag">{activeTechFilter.toUpperCase()} SPECIALIZATION</span>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  style={{ padding: '4px 12px', fontSize: 12 }}
                  onClick={() => setActiveTechFilter('All')}
                >
                  ✕ Clear Filter (Show All)
                </button>
              </div>
              <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', marginTop: 8 }}>{currentSpotlight.title}</h3>
              <p style={{ color: 'var(--slate)', margin: '12px 0 16px', fontSize: 15 }}>{currentSpotlight.lead}</p>
              
              <div className="badge-row" style={{ marginTop: 12 }}>
                {currentSpotlight.badges.map(b => (
                  <span key={b} className="badge" style={{ borderColor: 'var(--sky)', background: 'rgba(63, 169, 245, 0.12)' }}>{b}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 16, marginTop: 18, flexWrap: 'wrap' }}>
                {currentSpotlight.metrics.map(m => (
                  <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--mint)', fontSize: 13, fontWeight: 600 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--mint)' }}></span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 20 }}>
                <Link to={`/contact?service=${encodeURIComponent(currentSpotlight.consultTopic)}`} className="btn btn-primary btn-sm">
                  Schedule {activeTechFilter} Technical Consultation <ArrowRightIcon size={14} className="btn-arrow" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Services List with Dedicated Unique Visuals */}
      {filteredServices.length > 0 ? (
        filteredServices.map((service, idx) => (
          <section
            key={service.id}
            className="section"
            id={service.id}
            style={{ paddingTop: idx === 0 ? 32 : 0 }}
          >
            <div className="wrap two-col">
              <div className="reveal">
                <div className="eyebrow">{service.num} — {service.category}</div>
                <h2 style={{ fontSize: 'clamp(24px,3vw,32px)' }}>{service.title}</h2>
                <p style={{ color: 'var(--slate)', marginTop: 16 }}>
                  {service.description}
                </p>
                
                <div className="badge-row">
                  {service.techs.map(tech => {
                    const isMatched = activeTechFilter !== 'All' && tech.toLowerCase().includes(activeTechFilter.toLowerCase());
                    return (
                      <span
                        key={tech}
                        className="badge"
                        style={isMatched ? { borderColor: 'var(--mint)', background: 'rgba(110, 231, 196, 0.15)', color: 'var(--white)' } : {}}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="deliverables-box">
                  <h4>Key Deliverables:</h4>
                  <ul>
                    {service.deliverables.map(del => (
                      <li key={del} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <CheckIcon size={14} /> {del}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: 24 }}>
                  <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="btn btn-primary btn-sm">
                    Consult on {service.title} <ArrowRightIcon size={14} className="btn-arrow" />
                  </Link>
                </div>
              </div>

              <div className="reveal">
                <div className="service-visual-container">
                  <img src={service.image} alt={service.title} />
                </div>

                <ul className="node-list">
                  {service.features.map(([term, copy]) => (
                    <li key={term}>
                      <strong>{term}</strong> {copy}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className="section">
          <div className="wrap">
            <div className="card reveal center" style={{ padding: 48 }}>
              <h3>No direct service matching "{activeTechFilter}"</h3>
              <p style={{ color: 'var(--slate)', marginTop: 12 }}>
                We provide custom engineering for {activeTechFilter} as part of our full-stack architecture engagements.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginTop: 20 }}
                onClick={() => setActiveTechFilter('All')}
              >
                Reset Technology Filters
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Call to Action */}
      <section className="section-tight">
        <div className="wrap">
          <div className="band reveal">
            <div className="band-row">
              <div>
                <h2>Need a tailored architectural assessment for your project?</h2>
                <p>Tell us about your product goals — our senior engineers will diagnose your technical requirements and provide an actionable blueprint.</p>
              </div>
              <Link to="/contact" className="btn" style={{ background: 'var(--navy-900)', color: '#fff' }}>
                Schedule Technical Call <ArrowRightIcon size={14} className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
