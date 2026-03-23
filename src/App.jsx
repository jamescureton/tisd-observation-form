import { useState } from “react”;

const NAVY = “#1B2A4A”;
const RED = “#C0272D”;
const GOLD = “#C9982A”;
const TEAL = “#2A7F8F”;
const WHITE = “#FFFFFF”;

// ─── Logo ────────────────────────────────────────────────────────────────────
function TylerISDLogo({ size = 56 }) {
return (
<svg width={size * 2.8} height={size} viewBox=“0 0 160 56” fill=“none” xmlns=“http://www.w3.org/2000/svg”>
<rect x="2" y="2" width="42" height="52" rx="2" fill={NAVY} stroke={WHITE} strokeWidth="1.5"/> <rect x="4" y="4" width="38" height="12" rx="1" fill={WHITE}/> <rect x="17" y="16" width="12" height="36" rx="1" fill={WHITE}/> <circle cx="23" cy="28" r="9" fill={RED}/> <ellipse cx="23" cy="20" rx="5" ry="7" fill={RED}/> <ellipse cx="29" cy="24" rx="5" ry="7" fill="#A01E23" transform="rotate(45 29 24)"/> <ellipse cx="17" cy="24" rx="5" ry="7" fill="#A01E23" transform="rotate(-45 17 24)"/> <ellipse cx="29" cy="32" rx="5" ry="7" fill={RED} transform="rotate(135 29 32)"/> <ellipse cx="17" cy="32" rx="5" ry="7" fill={RED} transform="rotate(-135 17 32)"/> <circle cx="23" cy="28" r="4" fill="#8B1010"/> <circle cx="23" cy="28" r="2" fill="#6A0A0A"/> <ellipse cx="15" cy="40" rx="5" ry="3" fill="#2D6A2D" transform="rotate(-30 15 40)"/> <ellipse cx="31" cy="40" rx="5" ry="3" fill="#2D6A2D" transform="rotate(30 31 40)"/> <text x="52" y="30" fontFamily="'Arial Black', sans-serif" fontWeight="900" fontSize="20" fill={WHITE} letterSpacing="1">TYLER ISD</text> <text x="52" y="46" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="8" fill={WHITE} letterSpacing="2">SUCCESSFUL STUDENT OUTCOMES</text> </svg> ); }

// ─── Data ────────────────────────────────────────────────────────────────────
const PLANNING = [
{ id: “p1”, bold: “Teach at Grade Level:”, text: “Students have a clear lesson objective. Lesson materials and activities are aligned to the objective and to state standards.”, u: 0, p: 0.5, m: 1 }, { id: “p2”, bold: “Teach to the DOL:”, text: “Teacher has internalized the DOL/exit ticket during planning, anticipated misconceptions and adjusted materials accordingly. Teacher intentionally threads the lesson objective throughout the lesson.”, italic: “(Some examples of strong internalization include, but are not limited to, knowledge of the slides or materials, fluid delivery, anticipated misconceptions, purposeful plans for at-bats, rigorous questioning aligned to objective.)”, u: 0, p: 0.5, m: 1 }, { id: “p3”, bold: “Use exemplars:”, text: “Teacher plans and embeds concrete examples/exemplars of desired student responses or products to support student understanding of what success looks like.”, u: 0, p: 0.5, m: 1 }, ]; const INSTRUCTION = [ { id: “i1”, bold: “Get to the objective:”, text: “Teacher focuses core instruction on mastery of the planned objective. Teacher gets to the objective quickly and remains focused on the objective throughout the lesson.”, u: 0, p: 1, m: 2 }, { id: “i2”, bold: “Stamp key points:”, text: “Teacher consistently stamps key learning points throughout the lesson – during and/or after student engagement opportunities and/or instructional transitions.”, u: 0, p: 0.5, m: 1 }, { id: “i3”, bold: “Pick up the pace:”, text: “Teacher moves students steadily and purposefully toward independent mastery. Transitions and routines support a learning environment that allows for maximized instructional time.”, u: 0, p: 1, m: 2 }, { id: “i4”, bold: “Provide multiple opportunities:”, text: “Teacher provides student with multiple opportunities/at bats to practice skills aligned to the objective.”, u: 0, p: 0.5, m: 1 }, { id: “i5”, bold: “Engagement strategies (listening and speaking):”, text: “All students engage in meaningful, challenging, real-world content with their peers through listening, thinking, and speaking. Ex: Pair and Share.”, u: 0, p: 0.5, m: 1 }, { id: “i6”, bold: “Engagement strategies (writing):”, text: “Students engage in thinking after reading using structured writing activities aligned to the lesson objective that promote analysis, reasoning, and/or justification. Ex: Use quick response cards.”, u: 0, p: 1, m: 2 }, { id: “i7”, bold: “Annotation (reading):”, text: “Teacher and students read and annotate for a specific purpose, tied to the objective, to support a deeper understanding of text or problems.”, u: 0, p: 0.5, m: 1 }, { id: “i8”, bold: “Scaffolds:”, text: “Teacher scaffolds instruction proactively and in response to student misunderstanding as needed. Teacher utilizes visuals, sentence stems, gestures, and/or other supports for all students and special populations. Scaffolds are intentional such that they are aligned to objective/support student mastery.”, u: 0, p: 0.5, m: 1 }, { id: “i9”, bold: “Use students answers and questions:”, text: “Teacher utilizes student answers and questions to reinforce key ideas and/or correct misconceptions.”, u: 0, p: 0.5, m: 1 }, { id: “i10”, bold: “Monitor and adjust:”, text: “Teacher monitors student progress throughout the lesson and adjusts accordingly based on collected data.”, u: 0, p: 0.5, m: 1 }, ]; const CULTURE = [ { id: “c1”, bold: “Learning environment:”, text: “The classroom is organized, safe, and respectful to support student learning and positive interactions.”, u: 0, p: 0.5, m: 1 }, { id: “c2”, bold: “Reinforce and redirect:”, text: “The teacher reinforces positive behaviors and/or intercepts misbehavior without disruption to lesson momentum.”, u: 0, p: 0.5, m: 1 }, ]; const ALL_ITEMS = […PLANNING, …INSTRUCTION, …CULTURE]; const REQUIRED_FIELDS = [“teacher”, “campus”, “grade”, “observer”, “date”, “content”];

function getProficiency(total) {
if (total === “”) return { label: “—”, color: “#ccc” }; const t = parseFloat(total);
if (t <= 5.5)  return { label: “UNSAT”,   color: “#C0272D” };
if (t <= 7.5)  return { label: “PROG I”,  color: “#D05020” };
if (t <= 10)   return { label: “PROG II”, color: “#C08020” };
if (t <= 14)   return { label: “PROF I”,  color: “#2A7F8F” };
if (t <= 16.5) return { label: “PROF II”, color: “#1F6B7A” }; if (t <= 17.5) return { label: “EXEMP I”, color: “#1a5c30” };
return           { label: “EXEMP II”, color: “#0e3d1f” };
}

// ─── Shared Header ───────────────────────────────────────────────────────────
function FormHeader() {
return (
<div style={{ background: NAVY, padding: “16px 24px”, display: “flex”, alignItems: “center”, justifyContent: “space-between” }}> <TylerISDLogo size={52} /> <div style={{ textAlign: “right” }}> <div style={{ color: WHITE, fontFamily: “‘Arial Black’, sans-serif”, fontSize: 18, fontWeight: 900, letterSpacing: 0.5 }}>Core Spot Observation Form</div> <div style={{ color: “rgba(255,255,255,0.65)”, fontSize: 11, marginTop: 2 }}>SY25–26 · Last Updated 3/23/26</div> </div> </div> ); }

// ─── Score Row ───────────────────────────────────────────────────────────────
function ScoreRow({ item, value, onChange, hasError }) { return ( <tr data-error={hasError} style={{ borderBottom: “1px solid #ddd”, background: hasError ? “#fff8f8” : “transparent”, transition: “background 0.2s” }}> <td style={{ padding: “6px 10px”, fontSize: 12, lineHeight: 1.5, verticalAlign: “top”, borderLeft: hasError ? `3px solid ${RED}` : “3px solid transparent” }}> <strong>{item.bold}</strong> {item.text} {item.italic && <em style={{ color: “#666”, display: “block”, marginTop: 2 }}>{item.italic}</em>} </td> {[“u”, “p”, “m”].map(level => ( <td key={level} style={{ textAlign: “center”, verticalAlign: “middle”, width: 36, padding: “4px 2px” }}> <button onClick={() => onChange(item.id, level === value ? null : level)} style={{
width: 28, height: 28, borderRadius: “50%”, border: “2px solid”,
borderColor: value === level ? (level === “u” ? RED : level === “p” ? GOLD : “#2a7a3a”) : “#ccc”,
background: value === level ? (level === “u” ? RED : level === “p” ? GOLD : “#2a7a3a”) : WHITE,
color: value === level ? WHITE : “#666”,
fontWeight: “bold”, fontSize: 11, cursor: “pointer”, transition: “all 0.15s ease”,
display: “flex”, alignItems: “center”, justifyContent: “center”, margin: “0 auto”
}}>{item[level]}</button>
</td>
))}
</tr>
);
}

function SectionHeader({ label }) {
return (
<tr>
<td colSpan={4} style={{ background: NAVY, color: WHITE, fontWeight: “bold”, fontSize: 13, textAlign: “center”, padding: “6px 10px”, letterSpacing: 1 }}>{label}</td> </tr> ); }

function ColumnHeaders() {
return (
<tr style={{ background: “#e8eef5” }}>
<td style={{ padding: “5px 10px”, fontSize: 11, fontWeight: “bold”, color: “#333” }}> Circle # of points earned (U = Unsatisfactory, P = Partially Effective, M = Mostly Effective):
</td>
{[“U”,“P”,“M”].map(l => (
<td key={l} style={{ textAlign: “center”, fontWeight: “bold”, fontSize: 12, color: NAVY, width: 36, padding: “4px 2px” }}>{l}</td> ))} </tr> ); }

// ─── Confirmation Screen ─────────────────────────────────────────────────────
function ConfirmationScreen({ fields, totalPoints, proficiency, onNew }) { return ( <div style={{ fontFamily: “Arial, sans-serif”, background: “#f0f2f5”, minHeight: “100vh”, padding: “20px 0” }}> <div style={{ maxWidth: 780, margin: “0 auto”, background: WHITE, boxShadow: “0 4px 24px rgba(0,0,0,0.15)”, borderRadius: 4, overflow: “hidden” }}> <FormHeader /> <div style={{ padding: “48px 40px”, textAlign: “center” }}> <div style={{ width: 72, height: 72, borderRadius: “50%”, background: “#2a7a3a”, display: “flex”, alignItems: “center”, justifyContent: “center”, margin: “0 auto 20px”, fontSize: 36, color: WHITE }}>✓</div> <div style={{ fontSize: 24, fontWeight: “bold”, color: NAVY, marginBottom: 8 }}>Observation Submitted</div> <div style={{ fontSize: 14, color: “#555”, marginBottom: 32 }}> Observation for <strong>{fields.teacher}</strong> has been recorded successfully.
</div>

```
      <div style={{ background: "#f7f9fc", border: "1px solid #dde3ed", borderRadius: 6, padding: "20px 28px", maxWidth: 460, margin: "0 auto 32px", textAlign: "left" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px", fontSize: 13, marginBottom: 16 }}>
          {[["Teacher", fields.teacher],["Campus", fields.campus],["Grade Level", fields.grade],["Observer", fields.observer],["Date", fields.date],["Content", fields.content]].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontSize: 10, color: "#888", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>{label}</div>
              <div style={{ color: NAVY, fontWeight: "bold" }}>{val || "—"}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #dde3ed", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 10, color: "#888", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Total Points</div>
            <div style={{ fontSize: 32, fontWeight: "bold", color: NAVY }}>{totalPoints.toFixed(1)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#888", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Proficiency Level</div>
            <div style={{ fontSize: 22, fontWeight: "bold", color: WHITE, background: proficiency.color, padding: "6px 18px", borderRadius: 4 }}>{proficiency.label}</div>
          </div>
        </div>
      </div>

      <div style={{ fontSize: 11, color: "#999", marginBottom: 28 }}>Note: Spot scores are NOT rounded</div>

      <button onClick={onNew} style={{
        background: NAVY, color: WHITE, border: "none", borderRadius: 4,
        padding: "13px 44px", fontSize: 15, fontWeight: "bold", cursor: "pointer",
        letterSpacing: 0.5, boxShadow: "0 2px 8px rgba(27,42,74,0.3)", transition: "background 0.2s"
      }}
        onMouseOver={e => e.currentTarget.style.background = "#2a4070"}
        onMouseOut={e => e.currentTarget.style.background = NAVY}
      >+ Start New Observation</button>
    </div>
  </div>
</div>
```

);
}

// ─── Main Observation Form ───────────────────────────────────────────────────
function ObservationForm() {
const empty = { teacher: “”, campus: “”, grade: “”, observer: “”, date: “”, time: “”, content: “” }; const [scores, setScores] = useState({}); const [fields, setFields] = useState(empty); const [praise, setPraise] = useState(””); const [polish, setPolish] = useState(””); const [question, setQuestion] = useState(””); const [submitted, setSubmitted] = useState(false); const [errors, setErrors] = useState({}); const [attempted, setAttempted] = useState(false);

const handleScore = (id, level) => {
setScores(s => ({ …s, [id]: level }));
if (attempted) setErrors(e => ({ …e, [id]: false })); };

const answeredCount = ALL_ITEMS.filter(i => scores[i.id]).length; const allScored = answeredCount === ALL_ITEMS.length; const totalPoints = ALL_ITEMS.reduce((sum, item) => scores[item.id] ? sum + item[scores[item.id]] : sum, 0); const proficiency = getProficiency(allScored ? totalPoints : “”);

const handleSubmit = () => {
setAttempted(true);
const errs = {};
let bad = false;
REQUIRED_FIELDS.forEach(k => { if (!fields[k].trim()) { errs[k] = true; bad = true; } }); ALL_ITEMS.forEach(item => { if (!scores[item.id]) { errs[item.id] = true; bad = true; } }); setErrors(errs); if (bad) {
setTimeout(() => {
const el = document.querySelector(’[data-error=“true”]’);
if (el) el.scrollIntoView({ behavior: “smooth”, block: “center” }); }, 50); return; } setSubmitted(true); };

const handleNew = () => {
setScores({}); setFields(empty);
setPraise(””); setPolish(””); setQuestion(””); setSubmitted(false); setErrors({}); setAttempted(false); window.scrollTo({ top: 0, behavior: “smooth” }); };

if (submitted) {
return <ConfirmationScreen fields={fields} totalPoints={totalPoints} proficiency={getProficiency(totalPoints)} onNew={handleNew} />; }

const unanswered = ALL_ITEMS.filter(i => !scores[i.id]); const inp = (key) => ({
border: `1px solid ${errors[key] ? RED : "#ccc"}`, borderRadius: 3, padding: “4px 8px”,
fontSize: 12, width: “100%”, boxSizing: “border-box”, fontFamily: “inherit”,
background: errors[key] ? “#fff5f5” : WHITE, transition: “border-color 0.2s”
});

return (
<div style={{ fontFamily: “‘Georgia’, serif”, background: “#f0f2f5”, minHeight: “100vh”, padding: “20px 0” }}> <div style={{ maxWidth: 780, margin: “0 auto”, background: WHITE, boxShadow: “0 4px 24px rgba(0,0,0,0.15)”, borderRadius: 4, overflow: “hidden” }}> <FormHeader /> <div style={{ padding: “0 0 24px 0” }}>

```
      {/* Meta fields */}
      <div style={{ padding: "12px 20px", borderBottom: "2px solid #ddd" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 24px" }}>
          {[["teacher","Teacher:"],["campus","Campus:"],["grade","Grade Level:"],["observer","Observer:"],["date","Date:"],["time","Time:"],["content","Content:"]].map(([key, label]) => (
            <div key={key} data-error={!!errors[key]} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <label style={{ fontSize: 12, fontWeight: "bold", whiteSpace: "nowrap", minWidth: 80, fontFamily: "Arial, sans-serif", color: errors[key] ? RED : "#333" }}>{label}</label>
              <input value={fields[key]} onChange={e => { setFields(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: false })); }} style={inp(key)} />
            </div>
          ))}
        </div>
        {attempted && REQUIRED_FIELDS.some(k => errors[k]) && (
          <div style={{ color: RED, fontSize: 11, marginTop: 8, fontFamily: "Arial, sans-serif" }}>⚠ Please complete all required fields above.</div>
        )}
      </div>

      {/* Progress bar */}
      <div style={{ padding: "8px 20px", background: "#f7f9fc", borderBottom: "1px solid #e8eef5", fontFamily: "Arial, sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 6, background: "#e0e0e0", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ width: `${(answeredCount / ALL_ITEMS.length) * 100}%`, height: "100%", background: allScored ? "#2a7a3a" : TEAL, borderRadius: 3, transition: "width 0.3s" }} />
        </div>
        <div style={{ fontSize: 11, color: allScored ? "#2a7a3a" : "#666", fontWeight: "bold", whiteSpace: "nowrap" }}>
          {allScored ? "✓ All indicators scored" : `${answeredCount} of ${ALL_ITEMS.length} indicators scored`}
        </div>
      </div>

      {/* Scoring table */}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: "Arial, sans-serif" }}>
        <tbody>
          <ColumnHeaders />
          <SectionHeader label="PLANNING" />
          {PLANNING.map(item => <ScoreRow key={item.id} item={item} value={scores[item.id]} onChange={handleScore} hasError={!!errors[item.id]} />)}
          <SectionHeader label="INSTRUCTION" />
          {INSTRUCTION.map(item => <ScoreRow key={item.id} item={item} value={scores[item.id]} onChange={handleScore} hasError={!!errors[item.id]} />)}
          <SectionHeader label="CLASSROOM CULTURE" />
          {CULTURE.map(item => <ScoreRow key={item.id} item={item} value={scores[item.id]} onChange={handleScore} hasError={!!errors[item.id]} />)}
          <tr style={{ background: "#f9f4e8" }}>
            <td style={{ padding: "8px 10px", textAlign: "right", fontWeight: "bold", fontSize: 13 }}>Total Points:</td>
            <td colSpan={3} style={{ textAlign: "center", padding: "8px" }}>
              <span style={{ display: "inline-block", minWidth: 60, padding: "4px 14px", background: allScored ? GOLD : "#ddd", color: allScored ? NAVY : "#999", fontWeight: "bold", fontSize: 15, borderRadius: 4, transition: "all 0.3s" }}>
                {allScored ? totalPoints.toFixed(1) : `${answeredCount}/${ALL_ITEMS.length}`}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Praise / Polish / Question */}
      <div style={{ padding: "12px 20px", fontFamily: "Arial, sans-serif" }}>
        {[["Praise:", praise, setPraise],["Polish:", polish, setPolish],["Question:", question, setQuestion]].map(([label, val, setter]) => (
          <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8, borderBottom: "1px solid #e0e0e0", paddingBottom: 8 }}>
            <label style={{ fontSize: 12, fontWeight: "bold", minWidth: 70, paddingTop: 5 }}>{label}</label>
            <textarea value={val} onChange={e => setter(e.target.value)} rows={2} style={{ border: "1px solid #ccc", borderRadius: 3, padding: "4px 8px", fontSize: 12, width: "100%", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }} />
          </div>
        ))}
      </div>

      {/* Proficiency scale */}
      <div style={{ margin: "0 20px 16px", border: "1px solid #ddd", borderRadius: 4, overflow: "hidden", fontFamily: "Arial, sans-serif" }}>
        <div style={{ background: GOLD, padding: "5px 10px", fontWeight: "bold", fontSize: 12, textAlign: "center", color: NAVY }}>Proficiency Level</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
          {[["0–5.5","UNSAT","#C0272D"],["6–7.5","PROG I","#D05020"],["8–10","PROG II","#C08020"],["10.5–14","PROF I","#2A7F8F"],["14.5–16.5","PROF II","#1F6B7A"],["17–17.5","EXEMP I","#1a5c30"],["18","EXEMP II","#0e3d1f"]].map(([range, label, color]) => {
            const active = proficiency.label === label;
            return (
              <div key={label} style={{ textAlign: "center", padding: "5px 2px", background: active ? color : "#f5f5f5", borderRight: "1px solid #ddd", transition: "background 0.3s" }}>
                <div style={{ fontSize: 10, color: active ? WHITE : "#666", fontWeight: "bold" }}>{range}</div>
                <div style={{ fontSize: 9, color: active ? WHITE : "#444", fontWeight: "bold", letterSpacing: 0.5 }}>{label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ textAlign: "center", color: RED, fontSize: 11, fontFamily: "Arial, sans-serif", marginBottom: 16 }}>
        Note: Spot scores are NOT rounded
      </div>

      {/* Validation error summary */}
      {attempted && unanswered.length > 0 && (
        <div style={{ margin: "0 20px 16px", background: "#fff5f5", border: `1px solid ${RED}`, borderRadius: 4, padding: "10px 14px", fontFamily: "Arial, sans-serif" }}>
          <div style={{ color: RED, fontWeight: "bold", fontSize: 12, marginBottom: 6 }}>⚠ Please score all indicators before submitting. Missing ({unanswered.length}):</div>
          <div style={{ fontSize: 11, color: "#666" }}>{unanswered.map(i => i.bold.replace(":", "")).join(" · ")}</div>
        </div>
      )}

      {/* Submit button */}
      <div style={{ textAlign: "center", padding: "0 20px" }}>
        <button onClick={handleSubmit} style={{
          background: NAVY, color: WHITE, border: "none", borderRadius: 4,
          padding: "13px 52px", fontSize: 15, fontWeight: "bold", cursor: "pointer",
          fontFamily: "Arial, sans-serif", letterSpacing: 0.5,
          boxShadow: "0 2px 8px rgba(27,42,74,0.3)", transition: "background 0.2s"
        }}
          onMouseOver={e => e.currentTarget.style.background = "#2a4070"}
          onMouseOut={e => e.currentTarget.style.background = NAVY}
        >Submit Observation</button>
      </div>

    </div>
  </div>
</div>
```

);
}

// ─── App Root ────────────────────────────────────────────────────────────────
export default function App() {
return <ObservationForm />;
}

