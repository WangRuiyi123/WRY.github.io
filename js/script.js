// 移动菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

menuToggle.addEventListener('click', () => {
    // 切换菜单显示状态
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navActions.style.display = isOpen ? 'none' : 'flex';
    
    // 调整导航栏样式
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
    navLinks.style.padding = '20px';
    navLinks.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    navLinks.style.gap = '15px';
    
    navActions.style.flexDirection = 'column';
    navActions.style.position = 'absolute';
    navActions.style.top = '150px';
    navActions.style.left = '0';
    navActions.style.right = '0';
    navActions.style.background = 'rgba(255, 255, 255, 0.95)';
    navActions.style.padding = '20px';
    navActions.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    
    // 切换汉堡菜单图标
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = isOpen ? 'rotate(0)' : 'rotate(45deg)';
    spans[1].style.opacity = isOpen ? '1' : '0';
    spans[2].style.transform = isOpen ? 'rotate(0)' : 'rotate(-45deg)';
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
    
    // 在滚动时关闭移动菜单
    if (window.innerWidth < 768) {
        navLinks.style.display = 'none';
        navActions.style.display = 'none';
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 滚动监听，高亮当前导航项
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// 数字增长动画
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            return;
        }
        element.textContent = Math.floor(start) + '+';
        requestAnimationFrame(updateCounter);
    }
    
    updateCounter();
}

// 元素可见性检测
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// 滚动动画
const animateElements = document.querySelectorAll('.feature-card, .example-card, .step');
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function handleScrollAnimations() {
    // 功能卡片和案例卡片动画
    animateElements.forEach(element => {
        if (isElementInViewport(element) && !element.classList.contains('animated')) {
            element.classList.add('animated');
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }
    });
    
    // 统计数字动画
    if (isElementInViewport(document.querySelector('.stats')) && !statsAnimated) {
        statNumbers.forEach((number, index) => {
            const target = parseInt(number.textContent);
            setTimeout(() => {
                animateCounter(number, target);
            }, index * 200);
        });
        statsAnimated = true;
    }
}

// 初始化页面时检查元素可见性
window.addEventListener('load', handleScrollAnimations);
window.addEventListener('scroll', handleScrollAnimations);

// 按钮悬停效果增强
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 8px 25px rgba(67, 97, 238, 0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '';
    });
});

// 响应式调整
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navLinks.style.display = 'flex';
        navActions.style.display = 'flex';
        navLinks.style.position = '';
        navLinks.style.top = '';
        navLinks.style.left = '';
        navLinks.style.right = '';
        navLinks.style.background = '';
        navLinks.style.padding = '';
        navLinks.style.boxShadow = '';
        navLinks.style.flexDirection = 'row';
        
        navActions.style.position = '';
        navActions.style.top = '';
        navActions.style.left = '';
        navActions.style.right = '';
        navActions.style.background = '';
        navActions.style.padding = '';
        navActions.style.boxShadow = '';
        navActions.style.flexDirection = 'row';
        
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';
    } else {
        navLinks.style.display = 'none';
        navActions.style.display = 'none';
    }
});

// Case Details Functionality
const viewDetailsButtons = document.querySelectorAll('.view-details');
const caseModal = document.getElementById('caseModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalCloseButtons = document.querySelectorAll('.modal-close');

// Case Data
const caseData = {
    case1: {
        title: "From Zero to Frontend Engineer - Study Journey",
        content: `
        <div class="case-detail">
            <h3>Study Overview</h3>
            <p>This is a complete journey record of becoming a frontend engineer through 6 months of systematic learning from scratch. The entire learning process is divided into 4 main phases, each with clear learning goals and project practices.</p>
            
            <div class="highlight-box">
                <p><strong>Learning Achievements:</strong> Mastered HTML/CSS basics, advanced JavaScript, React framework application, completed 24 practical projects, and successfully passed technical interviews to obtain a frontend development position.</p>
            </div>
            
            <h3>Study Timeline</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>Month 1-2: HTML/CSS Basics</h4>
                    <p>Learned HTML5 tags, CSS3 styles, responsive design, and Flexbox/Grid layouts.</p>
                    <ul>
                        <li>Completed personal resume website</li>
                        <li>Created responsive blog page</li>
                        <li>Learned UI design fundamentals</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 3-4: Advanced JavaScript</h4>
                    <p>Deeply studied JavaScript core concepts, DOM manipulation, asynchronous programming, and ES6+ features.</p>
                    <ul>
                        <li>Developed a to-do list application</li>
                        <li>Implemented weather API query application</li>
                        <li>Learned AJAX and Fetch API</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 5: React Framework Learning</h4>
                    <p>Mastered React components, state management, Hooks, and routing.</p>
                    <ul>
                        <li>Built React e-commerce frontend pages</li>
                        <li>Learned Redux state management</li>
                        <li>Mastered React Router configuration</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 6: Project Practice and Job Preparation</h4>
                    <p>Completed comprehensive projects and prepared portfolio and technical interviews.</p>
                    <ul>
                        <li>Developed personal blog system</li>
                        <li>Learned frontend performance optimization</li>
                        <li>Prepared technical interview question bank</li>
                    </ul>
                </div>
            </div>
            
            <h3>Recommended Learning Resources</h3>
            <ul>
                <li><strong>Online Courses:</strong> Udemy Modern JavaScript Complete Guide, Coursera Frontend Development Specialization</li>
                <li><strong>Documentation:</strong> MDN Web Docs, React Official Documentation</li>
                <li><strong>Practice Platforms:</strong> Codecademy, freeCodeCamp</li>
            </ul>
            
            <h3>Pitfall Avoidance Guide</h3>
            <ul>
                <li>Don't skip basics to learn frameworks directly; solid HTML/CSS/JS foundation is crucial</li>
                <li>Get hands-on practice during learning; don't just watch videos or read documentation</li>
                <li>Try to solve problems independently to develop critical thinking and debugging skills</li>
                <li>Regularly review and summarize knowledge to form a knowledge system</li>
                <li>Join technical communities to exchange experiences with other learners</li>
            </ul>
        </div>
        `
    },
    case2: {
        title: "Japanese N1 Exam Preparation - Complete Record",
        content: `
        <div class="case-detail">
            <h3>Preparation Overview</h3>
            <p>This is a complete 8-month preparation record for the Japanese Language Proficiency Test (JLPT) N1 level, including comprehensive training methods for listening, reading, writing, vocabulary, and grammar.</p>
            
            <div class="highlight-box">
                <p><strong>Preparation Results:</strong> Mastered 1,200 core vocabulary words, 400 key grammar points, achieved 85% in listening, 70% in reading, and successfully passed the N1 exam.</p>
            </div>
            
            <h3>Study Timeline</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>Month 1-2: Foundation Consolidation</h4>
                    <p>Reviewed N2 vocabulary and grammar to build a foundation for the N1 exam.</p>
                    <ul>
                        <li>Memorized 30 N1 vocabulary words daily</li>
                        <li>Reviewed N2 core grammar</li>
                        <li>Started N1 listening practice</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 3-4: Vocabulary and Grammar Intensification</h4>
                    <p>Systematically studied N1 vocabulary and grammar.</p>
                    <ul>
                        <li>Completed "New Kanzen Master JLPT N1 Vocabulary"</li>
                        <li>Studied "Blue Book N1 Grammar"</li>
                        <li>Started reading N1 level articles</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 5-6: Specialized Training</h4>
                    <p>Conducted specialized training for listening, reading, and grammar.</p>
                    <ul>
                        <li>2 hours of listening practice daily</li>
                        <li>5 N1 reading exercises weekly</li>
                        <li>Organized error collection and regular review</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 7-8: Mock Exams and Final Sprint</h4>
                    <p>Conducted mock exams and filled knowledge gaps.</p>
                    <ul>
                        <li>1-2 complete mock tests weekly</li>
                        <li>Focused review on high-frequency vocabulary and grammar</li>
                        <li>Adjusted mindset and maintained good daily routine</li>
                    </ul>
                </div>
            </div>
            
            <h3>Recommended Learning Resources</h3>
            <ul>
                <li><strong>Vocabulary Books:</strong> "New Kanzen Master JLPT N1 Vocabulary", "N1 Vocabulary Quick Memorization"</li>
                <li><strong>Grammar Books:</strong> "Blue Book N1 Grammar", "Complete Mastery of N1 Grammar"</li>
                <li><strong>Listening Materials:</strong> NHK News, Past Exam Listening</li>
                <li><strong>Recommended Apps:</strong> Anki Flashcards, Quizlet</li>
            </ul>
            
            <h3>Vocabulary Memorization Techniques</h3>
            <ul>
                <li>Use spaced repetition method to memorize words and review regularly</li>
                <li>Memorize words through example sentences to understand usage in context</li>
                <li>Create word cards and review during spare time</li>
                <li>Categorize words by topic, part of speech, etc.</li>
                <li>Combine listening and reading to memorize words in actual use</li>
            </ul>
            
            <h3>Pitfall Avoidance Guide</h3>
            <ul>
                <li>Don't just memorize vocabulary by rote; understand usage and collocations</li>
                <li>Progress gradually with listening practice, from simple to complex</li>
                <li>Adjust daily routine one week before the exam to ensure adequate sleep</li>
                <li>Pay attention to time allocation during the exam; don't spend too much time on one question</li>
                <li>Focus on accumulation平时; last-minute cramming has limited effect</li>
            </ul>
        </div>
        `
    },
    case3: {
        title: "UI Design Learning Journey - From Beginner to Employment",
        content: `
        <div class="case-detail">
            <h3>Study Overview</h3>
            <p>This is a 4-month UI design learning journey record, from design principles introduction to Figma practice, ultimately successfully obtaining a UI designer position.</p>
            
            <div class="highlight-box">
                <p><strong>Learning Achievements:</strong> Mastered design principles, color theory, typography skills, proficiently used Figma and other design tools, completed 50 design exercises and 15 complete projects, and built a professional portfolio.</p>
            </div>
            
            <h3>Study Timeline</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>Month 1: Design Fundamentals</h4>
                    <p>Learned design principles, color theory, typography, and user experience basics.</p>
                    <ul>
                        <li>Completed design fundamentals course</li>
                        <li>Practiced color matching and typography</li>
                        <li>Analyzed excellent design works</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 2: Design Tool Mastery</h4>
                    <p>Learned Figma, Photoshop, Illustrator and other design tools.</p>
                    <ul>
                        <li>Mastered Figma basic operations and advanced features</li>
                        <li>Learned UI component design and design systems</li>
                        <li>Completed basic icon and interface design exercises</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 3: UI Interface Design Practice</h4>
                    <p>Conducted actual UI interface design project exercises.</p>
                    <ul>
                        <li>Designed mobile application interfaces</li>
                        <li>Designed web interfaces</li>
                        <li>Learned interaction design principles</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>Month 4: Portfolio Building and Job Search</h4>
                    <p>Organized projects, built professional portfolio, and prepared for job search.</p>
                    <ul>
                        <li>Selected 3-5 best projects for optimization</li>
                        <li>Created online portfolio website</li>
                        <li>Prepared design case explanations and interviews</li>
                    </ul>
                </div>
            </div>
            
            <h3>Recommended Learning Resources</h3>
            <ul>
                <li><strong>Online Courses:</strong> UI Design Fundamentals, Figma UI Design</li>
                <li><strong>Design Inspiration:</strong> Dribbble, Behance, Pinterest</li>
                <li><strong>Tool Learning:</strong> Figma Official Tutorials, YouTube Design Tutorials</li>
                <li><strong>Recommended Books:</strong> "The Non-Designer's Design Book", "The Elements of User Experience"</li>
            </ul>
            
            <h3>Design Thinking Cultivation</h3>
            <ul>
                <li>Learn to think from the user's perspective</li>
                <li>Develop sensitivity to details</li>
                <li>Practice analysis and critical thinking</li>
                <li>Establish your own design style</li>
                <li>Learn to accept feedback and continuously improve</li>
            </ul>
            
            <h3>Design Specification Development</h3>
            <ul>
                <li>Establish a consistent color system</li>
                <li>Develop typography specifications</li>
                <li>Create reusable component libraries</li>
                <li>Write design documentation</li>
                <li>Ensure design implementability</li>
            </ul>
            
            <h3>Portfolio Building Experience</h3>
            <ul>
                <li>Select projects that demonstrate different skills</li>
                <li>Record the design process and thinking in detail</li>
                <li>Show design iteration process</li>
                <li>Highlight problem-solving abilities</li>
                <li>Ensure the design and user experience of the portfolio website</li>
            </ul>
            
            <h3>Pitfall Avoidance Guide</h3>
            <ul>
                <li>Don't focus only on aesthetics while ignoring user experience</li>
                <li>Consider development feasibility when creating design drafts</li>
                <li>Don't overly rely on design tool templates</li>
                <li>Learn to accept criticism and feedback</li>
                <li>Keep learning new design trends and technologies</li>
            </ul>
        </div>
        `
    }
};

// Open Modal Function
function openModal(caseId) {
    const caseInfo = caseData[caseId];
    if (caseInfo) {
        modalTitle.textContent = caseInfo.title;
        modalContent.innerHTML = caseInfo.content;
        caseModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
}

// Close Modal Function
function closeModal() {
    caseModal.classList.remove('active');
    document.body.style.overflow = ''; // 恢复背景滚动
}

// Add click event to view details buttons
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const caseId = button.getAttribute('data-id');
        openModal(caseId);
    });
});

// Add click event to close buttons
modalCloseButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});

// Close modal when clicking outside
caseModal.addEventListener('click', (e) => {
    if (e.target === caseModal) {
        closeModal();
    }
});

// Close modal when pressing ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && caseModal.classList.contains('active')) {
        closeModal();
    }
});

// FAQ Accordion Effect
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle active state of current question
        question.classList.toggle('active');
        
        // Get corresponding answer element
        const answer = question.nextElementSibling;
        
        // Toggle answer display state
        answer.classList.toggle('show');
    });
});

// Contact Form Submission Functionality
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form validation logic can be added here
        
        // Simulate successful form submission
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        console.log('表单数据:', formValues);
        
        // Show success message
        alert('Thank you for your message! We will reply to you as soon as possible.');
        
        // Reset form
        contactForm.reset();
    });
}