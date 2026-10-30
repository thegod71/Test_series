import React from 'react';
import './upsc-test-series.css';

export default function UpscTestSeriesArticle({ onOpenModal }) {
  const googleDocUrl = "https://docs.google.com/document/d/1D6fZQ1KPxqv_EFBHltMBSAInudo8-2tUV3V8qi35t0A/edit#";

  return (
    <section id="upsc-2027-guide" className="upsc-section-wrapper border-y border-gray-200/80">
      {/* Creative Section Intro Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#102a56] text-xs font-bold tracking-wide uppercase shadow-2xs mb-3">
          <span className="w-2 h-2 rounded-full bg-[#2259d6] animate-pulse"></span>
          <span>Official UPSC CSE 2027 Testing Ecosystem &amp; Syllabus Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#102a56] tracking-tight">
          Comprehensive 54-Test Pre-Cum-Mains Assessment Programme
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Detailed syllabus breakdown, package options, 3-tier testing architecture, micro-level report card analytics, and direct schedule downloads.
        </p>

        {/* Creative Quick-Jump Anchor Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          <a
            href="#upsc-test-series"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all hover:-translate-y-0.5"
          >
            📋 54 Tests Breakdown
          </a>
          <a
            href="#packages"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all hover:-translate-y-0.5"
          >
            📦 Packages &amp; Schedule
          </a>
          <a
            href="#free-mock-test"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all hover:-translate-y-0.5"
          >
            🎯 Free Open Mock
          </a>
          <a
            href="#why-dhyeya"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all hover:-translate-y-0.5"
          >
            ⭐ Salient Features
          </a>
          <a
            href="#testing-architecture"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all hover:-translate-y-0.5"
          >
            🏛️ 3-Stage Architecture
          </a>
          <a
            href="#report-card"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all hover:-translate-y-0.5"
          >
            📊 Personal Report Card
          </a>
          <a
            href="#faqs"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all hover:-translate-y-0.5"
          >
            ❓ 2027 FAQs
          </a>
        </div>
      </div>

      {/* The Complete Article with Exact Markup & Styling */}
      <div className="page">
        <article className="content" itemScope itemType="https://schema.org/WebPage">
          {/* Top Decorative Gradient Accent Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-[#102a56] via-[#2259d6] to-[#7147d7]" />

          {/* Elegant Top Document Header Bar */}
          <div className="px-6 sm:px-10 lg:px-14 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50/60 via-white to-indigo-50/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#102a56] text-white text-xs font-bold uppercase tracking-wider shadow-2xs">
                Official Programme Guide
              </span>
              <span className="text-xs font-semibold text-gray-500">
                UPSC CSE 2027 • 54 Tests Architecture
              </span>
            </div>
            <a
              href={googleDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2259d6] hover:text-[#7147d7] hover:underline"
            >
              <span>Download Official Schedule PDF</span>
              <span>→</span>
            </a>
          </div>

          {/* Key Feature Table Section */}
          <h2 id="upsc-test-series" className="!mt-8">
            UPSC CSE 2027 — All India Pre-Cum-Mains Test Series
          </h2>
          <h3>A Comprehensive Assessment Programme for UPSC Civil Services Examination 2027</h3>

          <table>
            <thead>
              <tr>
                <th style={{ color: '#ffffff' }}>
                  <strong style={{ color: '#ffffff' }}>Key Feature</strong>
                </th>
                <th style={{ color: '#ffffff' }}>
                  <strong style={{ color: '#ffffff' }}>Description</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>54 Tests</strong>
                </td>
                <td>An integrated assessment programme covering Prelims and Mains preparation.</td>
              </tr>
              <tr>
                <td>
                  <strong>Prelims-Oriented Practice</strong>
                </td>
                <td>Exam-focused objective tests designed to strengthen conceptual clarity, factual accuracy, and elimination skills including UPSC CSAT mock test series.</td>
              </tr>
              <tr>
                <td>
                  <strong>Mains Answer-Writing Practice</strong>
                </td>
                <td>Descriptive tests to develop analytical depth, structured presentation, and multidimensional understanding.</td>
              </tr>
              <tr>
                <td>
                  <strong>Current Affairs Integration</strong>
                </td>
                <td>Assessment of contemporary developments alongside static syllabus areas.</td>
              </tr>
              <tr>
                <td>
                  <strong>Personalised Performance Report</strong>
                </td>
                <td>A detailed report after every test, providing insights into individual performance and progress.</td>
              </tr>
              <tr>
                <td>
                  <strong>Subject-Wise Performance Analysis</strong>
                </td>
                <td>Graphical assessment of strengths, weaknesses, accuracy, and score distribution across subjects.</td>
              </tr>
              <tr>
                <td>
                  <strong>Topic and Sub-Topic Analysis</strong>
                </td>
                <td>Identification of correctly answered, incorrectly answered, and unattempted questions for targeted revision.</td>
              </tr>
              <tr>
                <td>
                  <strong>Evaluator's Feedback</strong>
                </td>
                <td>Performance-based observations and actionable recommendations to improve preparation and answer quality.</td>
              </tr>
              <tr>
                <td>
                  <strong>Flexible Learning Mode</strong>
                </td>
                <td>Available in both online and offline modes.</td>
              </tr>
            </tbody>
          </table>

          {/* Programme Objective & Fee Structure Section */}
          <h3>
            Programme Objective: To provide systematic practice, performance tracking, and targeted improvement throughout the UPSC CSE 2027 preparation cycle.  
              <a
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#ffb547] via-[#ffa834] to-[#ff7b39] hover:from-[#ffa834] hover:to-[#ff6d24] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                href={googleDocUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enroll now
              </a>
             </h3> 
            <h2>Dhyeya IAS UPSC Test Series 2027: Packages, Schedule &amp; Fee Structure
          </h2>

          <p>
            Whether you want an integrated year-long roadmap or targeted stage-wise practice, our UPSC Test Series offers structured packages aligned with the UPSC CSE 2027 calendar. Every package includes detailed model answers, live/recorded faculty discussions, and micro-level performance analytics.
          </p>

          {/* Packages Table */}
          <table>
            <thead>
              <tr>
                <th style={{ color: '#ffffff' }}>
                  <strong style={{ color: '#ffffff' }}>Package Name</strong>
                </th>
                <th style={{ color: '#ffffff' }}>
                  <strong style={{ color: '#ffffff' }}>Total Tests Breakdown</strong>
                </th>
                <th style={{ color: '#ffffff' }}>
                  <strong style={{ color: '#ffffff' }}>Mode &amp; Medium</strong>
                </th>
                <th style={{ color: '#ffffff' }}>
                  <strong style={{ color: '#ffffff' }}>Batch Starting</strong>
                </th>
                <th style={{ color: '#ffffff' }}>
                  <strong style={{ color: '#ffffff' }}>Schedule PDF</strong>
                </th>
                <th style={{ color: '#ffffff' }}>
                  <strong style={{ color: '#ffffff' }}>Action</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>All India Integrated Pre-cum-Mains 2027 (Flagship)</strong>
                </td>
                <td>
                  <strong>54 Tests</strong> (Prelims GS + CSAT + Mains GS + Essay)
                </td>
                <td>Online &amp; Offline (Eng / हिंदी)</td>
                <td>Admission Open</td>
                <td>
                  <a
                    href={googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                </td>
                <td>
                  <a
                    href={googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enrol Now
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>UPSC Prelims Test Series 2027 (GS + CSAT)</strong>
                </td>
                <td>
                  <strong>35 Tests</strong> (Sectional + Full-Length GS &amp; CSAT Simulators)
                </td>
                <td>Online &amp; Offline (Eng / हिंदी)</td>
                <td>Admission Open</td>
                <td>
                  <a
                    href={googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                </td>
                <td>
                  <a
                    href={googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enrol Now
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>UPSC Mains Test Series 2027 (GS I–IV + Essay)</strong>
                </td>
                <td>
                  <strong>19 Tests</strong> (Half-Length, Full-Length &amp; Exam Simulators)
                </td>
                <td>Online &amp; Offline (Eng / हिंदी)</td>
                <td>Admission Open</td>
                <td>
                  <a
                    href={googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                </td>
                <td>
                  <a
                    href={googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enrol Now
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Dedicated UPSC CSAT Mock Test Series 2027</strong>
                </td>
                <td>
                  <strong>12 Tests</strong> (Topic-wise Comprehension, Quant, Reasoning + FLTs)
                </td>
                <td>Online &amp; Offline (Eng / हिंदी)</td>
                <td>Admission Open</td>
                <td>
                  <a
                    href={googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                </td>
                <td>
                  <a
                    href={googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enrol Now
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Free Mock Test Banner */}
          <div id="packages"></div>
          <h3 id="free-mock-test">Try Before You Commit: Free All-India Open UPSC Mock Test 2027</h3>
          <p>
            Not sure where your preparation stands right now? Register for our Free All-India Open UPSC Prelims Mock Test on the Dhyeya IAS portal. Experience real UPSC-level question framing, compete with thousands of aspirants nationwide, and unlock a sample Personal Report Card before you enrol.
          </p>
          <p>
            <a
              className="btn btn-accent"
              href="#free-mock-test"
              onClick={() => {
                if (onOpenModal) {
                  onOpenModal('Free UPSC Mock Test 2027');
                }
              }}
            >
              Attempt Free Demo Test Now
            </a>
          </p>

          <hr />

          {/* Salient Features Section */}
          <h2 id="why-dhyeya">Why Choose Dhyeya IAS UPSC Test Series 2027? (Salient Features)</h2>
          <p>
            Most aspirants fall into the trap of solving random question banks that neither reflect evolving UPSC trends nor diagnose why they are getting questions wrong. Here is why toppers and serious candidates rate Dhyeya IAS as the best test series for UPSC preparation:
          </p>
          <ul>
            <li>
              <strong>54 Integrated Tests for Holistic Readiness:</strong> Seamlessly transition between your ias pre test series and Mains answer writing without losing momentum between stages.
            </li>
            <li>
              <strong>PYQ-Integrated &amp; Trend-Aligned Question Framing:</strong> No random trivia. Every model question paper of upsc exam in our series is crafted by Subject Matter Experts (SMEs) after analysing the last 15 years of UPSC Previous Year Questions (PYQs), including statement-based and pair-matching formats.
            </li>
            <li>
              <strong>15-Month Current Affairs Mastery:</strong> Static concepts from NCERTs and standard reference books are dynamically linked with 15 months of current events from <em>The Hindu, Indian Express, PIB, Yojana,</em> and <em>Economic Survey</em>.
            </li>
            <li>
              <strong>CSAT-Specific Eliminator Edge:</strong> With Paper-II becoming increasingly tough, our upsc csat mock test series trains your reading comprehension, data interpretation, and logical reasoning so you comfortably cross the 33% qualifying threshold.
            </li>
            <li>
              <strong>In-Depth Model Answers &amp; Value-Addition Material:</strong> Receive synoptic notes, high-yield infographics, data points, Supreme Court judgments, and committee recommendations after every test for rapid revision.
            </li>
            <li>
              <strong>Faculty-Led Video Discussions:</strong> Watch expert post-test discussions breaking down question demand, logical elimination techniques for Prelims, and structural articulation for Mains.
            </li>
            <li>
              <strong>Bilingual Availability (UPSC Mock Test in Hindi &amp; English):</strong> All test papers, model solutions, and discussions are crafted independently with high linguistic accuracy in both English and Hindi mediums.
            </li>
          </ul>

          <hr />

          {/* 3-Stage Testing Architecture */}
          <h2 id="testing-architecture">3-Stage Testing Architecture: Prelims, CSAT &amp; Mains Integration</h2>
          <p>
            To build unshakable exam temperament, the Dhyeya IAS UPSC Test Series follows a progressive 3-Tier Pedagogical Architecture so you never feel overwhelmed:
          </p>

          <h3>Stage 1: Fundamental &amp; Sectional Tests (Building Concept Clarity)</h3>
          <p>
            Subject-wise Half-Length Tests (HLTs) and sectional mocks cover Polity, History, Art &amp; Culture, Geography, Economy, Environment, Science &amp; Tech, and Ethics. This stage ensures zero syllabus gaps and forces disciplined weekly targets.
          </p>

          <h3>Stage 2: Applied &amp; Revision Tests (Linking Static with Dynamic)</h3>
          <p>
            Multi-subject revision tests combine inter-disciplinary themes and current affairs. In our upsc prelims practice test modules, you learn to control wild guesswork and minimize negative marking under strict two-hour constraints.
          </p>

          <h3>Stage 3: Full-Length Simulators (Exam-Hall Temperament)</h3>
          <p>
            Before the real exam, you will sit through UPSC-pattern Full-Length Tests (FLTs) and full-day Mains Simulators (GS Papers I–IV + essay test series for upsc). Conducted under strict clock discipline with UPSC-style QCAB answer booklets, this builds the physical and mental stamina required to write 4,000+ words in three hours.
          </p>

          <hr />

          {/* Personal Report Card Section */}
          <h2 id="report-card">Your Personal Report Card After Every UPSC Mock Test</h2>
          <p>
            Scoring 85 marks in a upsc prelims mock test tells you nothing unless you know <em>where</em> you bled marks. The biggest differentiator of the Dhyeya IAS UPSC Test Series is the Personal Report Card generated after every single test.
          </p>
          <p>
            Instead of leaving you with just raw marks, your dashboard breaks down your performance across four actionable layers:
          </p>

          <ol>
            <li>
              <strong>Score Snapshot &amp; All-India Rank:</strong> Track total attempted, correct, incorrect, and skipped questions alongside your net score, accuracy percentage, negative-marking loss, and national percentile among serious peers.
            </li>
            <li>
              <strong>Subject-Wise Performance Charts:</strong> Visual heatmaps show how you perform in Polity versus Economy or Environment, immediately highlighting which subjects are dragging your cut-off down.
            </li>
            <li>
              <strong>Micro-Topic &amp; Sub-Topic Analysis:</strong> Drill down to the exact sub-topic level (e.g., <em>Parliamentary Committees</em> in Polity or <em>Balance of Payments</em> in Economy) across correct, incorrect, and skipped attempts so your revision is surgical.
            </li>
            <li>
              <strong>1-on-1 Evaluator's Comments:</strong> For our best mains test series for upsc, experienced evaluators assess your copies on <em>directive understanding, introduction-body-conclusion flow, diagram/map integration, and word-limit discipline</em>, giving personalized remarks on how to turn an average 4-mark answer into a 6.5-mark topper-level response.
            </li>
          </ol>

          <hr />

          {/* Score Improvement Methodology */}
          <h2 id="improve-score">How to Improve Your Score with Our Online and Offline IAS GS Test Series</h2>
          <p>
            Enrolling in a UPSC Test Series only delivers results if you follow a disciplined feedback loop. Here is the 5-step methodology we enforce with our students:
          </p>

          <ol>
            <li>
              <strong>Attempt in Strict Exam Conditions:</strong> Take every upsc mock exam within the prescribed time limit without pausing or checking notes.
            </li>
            <li>
              <strong>Audit Your Personal Report Card:</strong> Immediately after the test, review your accuracy ratio and subject-wise charts.
            </li>
            <li>
              <strong>Categorize Your Mistakes into 3 Buckets:</strong> Identify whether you lost marks due to <em>(a) Conceptual Gap, (b) Factual Revision Deficit,</em> or <em>(c) Misreading the Question (&quot;Not/Correct &quot; trap)</em>.
            </li>
            <li>
              <strong>Execute Targeted Revision:</strong> Use our model answers and value-addition handouts to plug your weak sub-topics within 48 hours of the test.
            </li>
            <li>
              <strong>Track Progress Across Subsequent Tests:</strong> Compare your subject charts across consecutive tests to verify that your negative marking is dropping and your Mains structuring speed is rising.
            </li>
          </ol>

          <h3>Seamless Flexibility: Online Portal &amp; Offline Classroom Centres</h3>
          <p>Whether you are preparing from Delhi, Prayagraj, Lucknow, or your hometown, Dhyeya IAS adapts to your schedule:</p>
          <ul>
            <li>
              <strong>Online Test Series for UPSC:</strong> Attempt Prelims MCQs directly on our interactive portal or upload scanned Mains answer booklets via the Dhyeya IAS app anytime, from anywhere in India, with digital evaluation returned within strict timelines.
            </li>
            <li>
              <strong>Offline Classroom Test Centres:</strong> Experience real exam-hall pressure at Dhyeya IAS centres across India, followed by face-to-face mentor discussions.
            </li>
          </ul>

          <p>
            Need help choosing the right batch?{' '}
            <button
              type="button"
              onClick={() => onOpenModal && onOpenModal('1-on-1 Academic Counselling')}
              className="text-[#2459d6] hover:text-[#7147d7] font-semibold underline underline-offset-4 cursor-pointer bg-transparent border-0 p-0 text-base inline font-inherit"
            >
              [Request a Free 1-on-1 Academic Counselling Call]
            </button>
          </p>

        </article>
      </div>
    </section>
  );
}
