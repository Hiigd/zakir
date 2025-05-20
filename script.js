// بيانات الأسئلة مع الصور
const questionData = {
    multipleChoice: [
        { id: 1, number: 1, title: "سؤال رقم 1", content: "<img src='images/IMG-20250520-WA0083.jpg' class='question-image' alt='سؤال رقم 1'>", completed: false },
        { id: 2, number: 3, title: "سؤال رقم 3", content: "<img src='images/IMG-20250520-WA0084.jpg' class='question-image' alt='سؤال رقم 3'>", completed: false },
        { id: 3, number: 4, title: "سؤال رقم 4", content: "<img src='images/IMG-20250520-WA0085.jpg' class='question-image' alt='سؤال رقم 4'>", completed: false },
        { id: 4, number: 6, title: "سؤال رقم 6", content: "<img src='images/IMG-20250520-WA0086.jpg' class='question-image' alt='سؤال رقم 6'>", completed: false },
        { id: 5, number: 7, title: "سؤال رقم 7", content: "<img src='images/IMG-20250520-WA0087.jpg' class='question-image' alt='سؤال رقم 7'>", completed: false },
        { id: 6, number: 10, title: "سؤال رقم 10", content: "<img src='images/IMG-20250520-WA0088.jpg' class='question-image' alt='سؤال رقم 10'>", completed: false },
        { id: 7, number: 14, title: "سؤال رقم 14", content: "<img src='images/IMG-20250520-WA0089.jpg' class='question-image' alt='سؤال رقم 14'>", completed: false },
        { id: 8, number: 17, title: "سؤال رقم 17", content: "<img src='images/IMG-20250520-WA0090.jpg' class='question-image' alt='سؤال رقم 17'>", completed: false },
        { id: 9, number: 20, title: "سؤال رقم 20", content: "<img src='images/IMG-20250520-WA0092.jpg' class='question-image' alt='سؤال رقم 20'>", completed: false },
        { id: 10, number: 22, title: "سؤال رقم 22", content: "<img src='images/IMG-20250520-WA0093.jpg' class='question-image' alt='سؤال رقم 22'>", completed: false },
        { id: 11, number: 23, title: "سؤال رقم 23", content: "<img src='images/IMG-20250520-WA0094.jpg' class='question-image' alt='سؤال رقم 23'>", completed: false },
        { id: 12, number: 24, title: "سؤال رقم 24", content: "<img src='images/IMG-20250520-WA0095.jpg' class='question-image' alt='سؤال رقم 24'>", completed: false },
        { id: 13, number: 25, title: "سؤال رقم 25", content: "<img src='images/IMG-20250520-WA0096.jpg' class='question-image' alt='سؤال رقم 25'>", completed: false },
        { id: 14, number: 28, title: "سؤال رقم 28", content: "<img src='images/IMG-20250520-WA0097.jpg' class='question-image' alt='سؤال رقم 28'>", completed: false },
        { id: 15, number: 30, title: "سؤال رقم 30", content: "<img src='images/IMG-20250520-WA0098.jpg' class='question-image' alt='سؤال رقم 30'>", completed: false },
        { id: 16, number: 36, title: "سؤال رقم 36", content: "<img src='images/IMG-20250520-WA0100.jpg' class='question-image' alt='سؤال رقم 36'>", completed: false },
        { id: 17, number: 37, title: "سؤال رقم 37", content: "<img src='images/IMG-20250520-WA0101.jpg' class='question-image' alt='سؤال رقم 37'>", completed: false },
        { id: 18, number: 38, title: "سؤال رقم 38", content: "<img src='images/IMG-20250520-WA0102.jpg' class='question-image' alt='سؤال رقم 38'>", completed: false },
        { id: 19, number: 39, title: "سؤال رقم 39", content: "<img src='images/IMG-20250520-WA0103.jpg' class='question-image' alt='سؤال رقم 39'>", completed: false },
        { id: 20, number: 40, title: "سؤال رقم 40", content: "<img src='images/IMG-20250520-WA0104.jpg' class='question-image' alt='سؤال رقم 40'>", completed: false },
        { id: 21, number: 41, title: "سؤال رقم 41", content: "<img src='images/IMG-20250520-WA0105.jpg' class='question-image' alt='سؤال رقم 41'>", completed: false },
        { id: 22, number: 42, title: "سؤال رقم 42", content: "<img src='images/IMG-20250520-WA0106.jpg' class='question-image' alt='سؤال رقم 42'>", completed: false },
        { id: 23, number: 43, title: "سؤال رقم 43", content: "<img src='images/IMG-20250520-WA0107.jpg' class='question-image' alt='سؤال رقم 43'>", completed: false },
        { id: 24, number: 44, title: "سؤال رقم 44", content: "<img src='images/IMG-20250520-WA0108.jpg' class='question-image' alt='سؤال رقم 44'>", completed: false },
        { id: 25, number: 45, title: "سؤال رقم 45", content: "<img src='images/IMG-20250520-WA0109.jpg' class='question-image' alt='سؤال رقم 45'>", completed: false },
        { id: 26, number: 48, title: "سؤال رقم 48", content: "<img src='images/IMG-20250520-WA0110.jpg' class='question-image' alt='سؤال رقم 48'>", completed: false }
    ],
    essay: [
        { id: 27, number: 18, title: "سؤال مقالي رقم 18", content: "<img src='images/IMG-20250520-WA0091.jpg' class='question-image' alt='سؤال مقالي رقم 18'>", completed: false },
        { id: 28, number: 31, title: "سؤال مقالي رقم 31", content: "<img src='images/IMG-20250520-WA0099.jpg' class='question-image' alt='سؤال مقالي رقم 31'>", completed: false }
    ]
};

// إعدادات particles.js
const particlesConfig = {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#3f51b5"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#3f51b5",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

// استرجاع حالة الإكمال من التخزين المحلي
function loadCompletionStatus() {
    const savedData = localStorage.getItem('chemistryQuestions');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        
        // تحديث حالة الأسئلة الاختيارية
        questionData.multipleChoice.forEach(question => {
            const savedQuestion = parsedData.multipleChoice.find(q => q.id === question.id);
            if (savedQuestion) {
                question.completed = savedQuestion.completed;
            }
        });
        
        // تحديث حالة الأسئلة المقالية
        questionData.essay.forEach(question => {
            const savedQuestion = parsedData.essay.find(q => q.id === question.id);
            if (savedQuestion) {
                question.completed = savedQuestion.completed;
            }
        });
    }
}

// حفظ حالة الإكمال في التخزين المحلي
function saveCompletionStatus() {
    localStorage.setItem('chemistryQuestions', JSON.stringify(questionData));
}

// تحديث شريط التقدم والإحصائيات
function updateProgressBar() {
    const totalQuestions = questionData.multipleChoice.length + questionData.essay.length;
    const completedQuestions = [
        ...questionData.multipleChoice,
        ...questionData.essay
    ].filter(q => q.completed).length;
    
    const progressPercentage = Math.round((completedQuestions / totalQuestions) * 100);
    
    // تحديث شريط التقدم
    document.getElementById('progress-percentage').textContent = `${progressPercentage}%`;
    document.getElementById('progress-bar-fill').style.width = `${progressPercentage}%`;
    
    // تحديث الإحصائيات
    document.getElementById('completed-count').textContent = completedQuestions;
    document.getElementById('total-count').textContent = totalQuestions;
    document.getElementById('remaining-count').textContent = totalQuestions - completedQuestions;
}

// إنشاء بطاقات الأسئلة الاختيارية
function createMultipleChoiceCards() {
    const container = document.querySelector('#multiple-choice .questions-grid');
    container.innerHTML = '';
    
    questionData.multipleChoice.forEach(question => {
        const card = document.createElement('div');
        card.className = `question-card ${question.completed ? 'completed' : ''}`;
        card.dataset.id = question.id;
        card.dataset.type = 'multipleChoice';
        
        card.innerHTML = `
            <div class="question-number">${question.number}</div>
            <div class="question-label">سؤال اختياري</div>
        `;
        
        card.addEventListener('click', () => openQuestionModal(question.id, 'multipleChoice'));
        container.appendChild(card);
    });
}

// إنشاء بطاقات الأسئلة المقالية
function createEssayCards() {
    const container = document.querySelector('#essay .questions-list');
    container.innerHTML = '';
    
    questionData.essay.forEach(question => {
        const card = document.createElement('div');
        card.className = `essay-card ${question.completed ? 'completed' : ''}`;
        card.dataset.id = question.id;
        card.dataset.type = 'essay';
        
        card.innerHTML = `
            <h3>سؤال ${question.number}</h3>
            <p>سؤال مقالي - انقر للعرض</p>
        `;
        
        card.addEventListener('click', () => openQuestionModal(question.id, 'essay'));
        container.appendChild(card);
    });
}

// إنشاء عرض جميع الأسئلة
function createAllQuestionsView() {
    const container = document.querySelector('#all .questions-combined');
    container.innerHTML = '';
    
    // إضافة قسم الأسئلة الاختيارية
    const mcSection = document.createElement('div');
    mcSection.innerHTML = `<h3 class="section-title">الأسئلة الاختيارية</h3>`;
    
    const mcGrid = document.createElement('div');
    mcGrid.className = 'questions-grid';
    
    questionData.multipleChoice.forEach(question => {
        const card = document.createElement('div');
        card.className = `question-card ${question.completed ? 'completed' : ''}`;
        card.dataset.id = question.id;
        card.dataset.type = 'multipleChoice';
        
        card.innerHTML = `
            <div class="question-number">${question.number}</div>
            <div class="question-label">سؤال اختياري</div>
        `;
        
        card.addEventListener('click', () => openQuestionModal(question.id, 'multipleChoice'));
        mcGrid.appendChild(card);
    });
    
    mcSection.appendChild(mcGrid);
    container.appendChild(mcSection);
    
    // إضافة قسم الأسئلة المقالية
    const essaySection = document.createElement('div');
    essaySection.innerHTML = `<h3 class="section-title">الأسئلة المقالية</h3>`;
    
    const essayList = document.createElement('div');
    essayList.className = 'questions-list';
    
    questionData.essay.forEach(question => {
        const card = document.createElement('div');
        card.className = `essay-card ${question.completed ? 'completed' : ''}`;
        card.dataset.id = question.id;
        card.dataset.type = 'essay';
        
        card.innerHTML = `
            <h3>سؤال ${question.number}</h3>
            <p>سؤال مقالي - انقر للعرض</p>
        `;
        
        card.addEventListener('click', () => openQuestionModal(question.id, 'essay'));
        essayList.appendChild(card);
    });
    
    essaySection.appendChild(essayList);
    container.appendChild(essaySection);
}

// إنشاء معرض الصور
function createGalleryView() {
    const container = document.querySelector('#gallery .gallery-container');
    container.innerHTML = '';
    
    // دمج جميع الأسئلة
    const allQuestions = [
        ...questionData.multipleChoice.map(q => ({ ...q, type: 'اختياري' })),
        ...questionData.essay.map(q => ({ ...q, type: 'مقالي' }))
    ];
    
    // ترتيب الأسئلة حسب الرقم
    allQuestions.sort((a, b) => a.number - b.number);
    
    // إنشاء عناصر المعرض
    allQuestions.forEach((question, index) => {
        // استخراج مسار الصورة من محتوى السؤال
        const imgSrcMatch = question.content.match(/src=['"]([^'"]+)['"]/);
        if (imgSrcMatch && imgSrcMatch[1]) {
            const imgSrc = imgSrcMatch[1];
            
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.index = index;
            
            galleryItem.innerHTML = `
                <img src="${imgSrc}" alt="سؤال ${question.number}">
                <div class="gallery-caption">
                    <h4>سؤال ${question.number} (${question.type})</h4>
                    <p>${question.completed ? 'تم الانتهاء' : 'لم يتم الانتهاء بعد'}</p>
                </div>
            `;
            
            galleryItem.addEventListener('click', () => openLightbox(index, allQuestions));
            container.appendChild(galleryItem);
        }
    });
}

// فتح نافذة السؤال
function openQuestionModal(questionId, type) {
    const modal = document.getElementById('question-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    let question;
    if (type === 'multipleChoice') {
        question = questionData.multipleChoice.find(q => q.id === questionId);
    } else {
        question = questionData.essay.find(q => q.id === questionId);
    }
    
    if (!question) return;
    
    modalTitle.textContent = type === 'multipleChoice' ? 
        `سؤال اختياري رقم ${question.number}` : 
        `سؤال مقالي رقم ${question.number}`;
    
    modalBody.innerHTML = `
        <div class="question-content">
            ${question.content}
        </div>
    `;
    
    // إضافة مستمع حدث لمربع الاختيار
    const checkbox = document.getElementById('completion-checkbox');
    checkbox.checked = question.completed;
    checkbox.addEventListener('change', () => {
        question.completed = checkbox.checked;
        saveCompletionStatus();
        updateUI();
    });
    
    // إضافة مستمع حدث للصورة لفتح العارض
    const questionImage = modalBody.querySelector('.question-image');
    if (questionImage) {
        questionImage.addEventListener('click', () => {
            openImageLightbox(questionImage.src);
        });
    }
    
    // إعداد أزرار التنقل
    setupNavigationButtons(questionId, type);
    
    // عرض النافذة المنبثقة مع تأثير
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// إعداد أزرار التنقل في النافذة المنبثقة
function setupNavigationButtons(currentId, type) {
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    
    let questions = type === 'multipleChoice' ? 
        questionData.multipleChoice : 
        questionData.essay;
    
    const currentIndex = questions.findIndex(q => q.id === currentId);
    
    // زر السؤال السابق
    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = () => openQuestionModal(questions[currentIndex - 1].id, type);
    } else {
        prevBtn.disabled = true;
    }
    
    // زر السؤال التالي
    if (currentIndex < questions.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => openQuestionModal(questions[currentIndex + 1].id, type);
    } else {
        nextBtn.disabled = true;
    }
}

// فتح عارض الصور للصورة الواحدة
function openImageLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    // إخفاء أزرار التنقل
    document.querySelector('.prev-img').style.display = 'none';
    document.querySelector('.next-img').style.display = 'none';
    
    // تعيين مصدر الصورة
    lightboxImage.src = imageSrc;
    
    // عرض العارض
    lightbox.classList.add('show');
}

// فتح عارض الصور لمعرض الصور
function openLightbox(index, questions) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const prevBtn = document.querySelector('.prev-img');
    const nextBtn = document.querySelector('.next-img');
    
    // تعيين مصدر الصورة الحالية
    const imgSrcMatch = questions[index].content.match(/src=['"]([^'"]+)['"]/);
    if (imgSrcMatch && imgSrcMatch[1]) {
        lightboxImage.src = imgSrcMatch[1];
    }
    
    // إظهار أزرار التنقل
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
    
    // تعيين وظائف أزرار التنقل
    prevBtn.onclick = () => {
        if (index > 0) {
            openLightbox(index - 1, questions);
        }
    };
    
    nextBtn.onclick = () => {
        if (index < questions.length - 1) {
            openLightbox(index + 1, questions);
        }
    };
    
    // تعطيل الأزرار إذا كنا في البداية أو النهاية
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === questions.length - 1;
    
    // عرض العارض
    lightbox.classList.add('show');
}

// إغلاق النافذة المنبثقة
function closeModal() {
    const modal = document.getElementById('question-modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// إغلاق عارض الصور
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}

// تبديل التبويبات
function switchTab(tabId) {
    // إخفاء جميع المحتويات
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // إلغاء تنشيط جميع الأزرار
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // تنشيط التبويب المحدد
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    
    // تحديث معرض الصور إذا تم اختياره
    if (tabId === 'gallery') {
        createGalleryView();
    }
}

// البحث عن الأسئلة
function searchQuestions() {
    const searchTerm = document.getElementById('search-input').value.trim();
    
    if (!searchTerm) {
        // إذا كان البحث فارغًا، أعد عرض جميع الأسئلة
        updateUI();
        return;
    }
    
    // البحث في الأسئلة الاختيارية
    const mcContainer = document.querySelector('#multiple-choice .questions-grid');
    mcContainer.innerHTML = '';
    
    questionData.multipleChoice.forEach(question => {
        if (question.number.toString().includes(searchTerm)) {
            const card = document.createElement('div');
            card.className = `question-card ${question.completed ? 'completed' : ''}`;
            card.dataset.id = question.id;
            card.dataset.type = 'multipleChoice';
            
            card.innerHTML = `
                <div class="question-number">${question.number}</div>
                <div class="question-label">سؤال اختياري</div>
            `;
            
            card.addEventListener('click', () => openQuestionModal(question.id, 'multipleChoice'));
            mcContainer.appendChild(card);
        }
    });
    
    // البحث في الأسئلة المقالية
    const essayContainer = document.querySelector('#essay .questions-list');
    essayContainer.innerHTML = '';
    
    questionData.essay.forEach(question => {
        if (question.number.toString().includes(searchTerm)) {
            const card = document.createElement('div');
            card.className = `essay-card ${question.completed ? 'completed' : ''}`;
            card.dataset.id = question.id;
            card.dataset.type = 'essay';
            
            card.innerHTML = `
                <h3>سؤال ${question.number}</h3>
                <p>سؤال مقالي - انقر للعرض</p>
            `;
            
            card.addEventListener('click', () => openQuestionModal(question.id, 'essay'));
            essayContainer.appendChild(card);
        }
    });
    
    // تحديث عرض جميع الأسئلة
    createAllQuestionsView();
    
    // تحديث معرض الصور
    createGalleryView();
}

// تبديل وضع السمة (فاتح/داكن)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // حفظ تفضيل السمة
    const isDarkMode = body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
    
    // تحديث particles.js إذا كان موجودًا
    if (window.pJSDom && window.pJSDom.length > 0) {
        if (isDarkMode) {
            window.pJSDom[0].pJS.particles.color.value = '#5c6bc0';
            window.pJSDom[0].pJS.particles.line_linked.color = '#5c6bc0';
        } else {
            window.pJSDom[0].pJS.particles.color.value = '#3f51b5';
            window.pJSDom[0].pJS.particles.line_linked.color = '#3f51b5';
        }
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

// تحديث واجهة المستخدم
function updateUI() {
    createMultipleChoiceCards();
    createEssayCards();
    createAllQuestionsView();
    updateProgressBar();
    
    // تحديث معرض الصور إذا كان التبويب نشطًا
    if (document.getElementById('gallery').classList.contains('active')) {
        createGalleryView();
    }
}

// تهيئة التطبيق
function initApp() {
    // تهيئة particles.js
    if (window.particlesJS) {
        window.particlesJS('particles-js', particlesConfig);
    }
    
    // تحميل حالة الإكمال
    loadCompletionStatus();
    
    // تهيئة واجهة المستخدم
    updateUI();
    
    // إعداد مستمعي الأحداث
    
    // تبديل التبويبات
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });
    
    // إغلاق النافذة المنبثقة
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // إغلاق عارض الصور
    document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
    
    // البحث
    document.getElementById('search-btn').addEventListener('click', searchQuestions);
    document.getElementById('search-input').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchQuestions();
        }
    });
    
    // تبديل السمة
    document.getElementById('theme-switch').addEventListener('change', toggleTheme);
    
    // تحميل تفضيل السمة
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-switch').checked = true;
    }
    
    // إضافة مستمع حدث للنقر خارج النافذة المنبثقة لإغلاقها
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('question-modal');
        if (e.target === modal) {
            closeModal();
        }
        
        const lightbox = document.getElementById('lightbox');
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // إضافة مستمع حدث للضغط على مفتاح Escape لإغلاق النوافذ المنبثقة
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeLightbox();
        }
    });
}

// تشغيل التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initApp);
