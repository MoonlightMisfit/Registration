function toggleSection() {
    const track = document.getElementById('trackSelect');
    const section = document.getElementById('sectionSelect');

    if (track && section) {
        if (track.value === "TVL") {
            section.disabled = false;
            section.classList.remove('locked');
        } else {
            section.disabled = true;
            section.classList.add('locked');
            section.selectedIndex = 0;
        }
    }
}
function showConfirmation() {
    const nextBtn = document.getElementById('main-next-btn');
    
    if (!document.getElementById('confirm-section').classList.contains('hidden')) {
        document.getElementById('success-modal').style.display = 'flex';
        return;
    }

  
    const getVal = (id, fallback) => {
        const el = document.getElementById(id);
        return el ? (el.value || fallback) : fallback;
    };

    const data = {
        "Surname:": getVal('in-surname', "Doe"),
        "Given Name:": getVal('in-given', "John"),
        "Middle Name:": getVal('in-middle', "Maverick"),
        "Sex:": getVal('in-sex', "Male"),
        "LRN:": getVal('in-lrn', "1234567890"),
        "Guardian’s Contact No.:": getVal('in-guardian', "0123-456-7890"),
        "Track:": getVal('in-track', "Academics"),
        "Section:": getVal('in-section', "Lmao"),
        "Email:": getVal('in-email', "newstudentemail@gmail.com"),
        "Password:": "1Hh2iF9ghLd" 
    };

    let html = "";
    for (const [label, val] of Object.entries(data)) {
        html += `<div class="confirm-label">${label}</div>`;
        if (label === "Email:" || label === "Password:") {
            html += `
                <div class="confirm-value copy-row">
                    <span>${val}</span>
                    <button class="copy-btn">Copy</button>
                    ${label === "Password:" ? '<span style="color: gray; font-size: 14px; margin-left: 10px;">Generated Password</span>' : ''}
                </div>`;
        } else {
            html += `<div class="confirm-value">${val}</div>`;
        }
    }

    document.getElementById('confirm-data').innerHTML = html;
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('confirm-section').classList.remove('hidden');
    document.getElementById('back-to-form').classList.remove('hidden');
}
function showForm() {
    document.getElementById('input-section').classList.remove('hidden');
    document.getElementById('confirm-section').classList.add('hidden');
    document.getElementById('back-to-form').classList.add('hidden');
}

function closeModal() {
    document.getElementById('success-modal').style.display = 'none';    
}
function showTeacherConfirmation() {
    const nextBtn = document.getElementById('main-next-btn');
    
  
    if (!document.getElementById('confirm-section').classList.contains('hidden')) {
        document.getElementById('success-modal').style.display = 'flex';
        return;
    }


    const data = {
        "Surname:": document.getElementById('t-surname').value || "Doe",
        "Given Name:": document.getElementById('t-given').value || "John",
        "Middle Name:": document.getElementById('t-middle').value || "Maverick",
        "Sex:": document.getElementById('t-sex').value || "Male",
        "Department:": document.getElementById('t-dept').value || "English Department",
        "DepEd Email:": document.getElementById('t-email').value || "newteacher@deped.gov.ph",
        "Password:": "1Hh2iF9ghLd"
    };

    let html = "";
    for (const [label, val] of Object.entries(data)) {
        html += `<div class="confirm-label">${label}</div>`;
        if (label === "DepEd Email:" || label === "Password:") {
            html += `<div class="confirm-value copy-row"><span>${val}</span><button class="copy-btn">Copy</button></div>`;
        } else {
            html += `<div class="confirm-value">${val}</div>`;
        }
    }

    document.getElementById('confirm-data-teacher').innerHTML = html;

  
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('confirm-section').classList.remove('hidden');
    document.getElementById('back-to-form').classList.remove('hidden');
}

