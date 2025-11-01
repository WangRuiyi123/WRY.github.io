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

// 案例详情功能
const viewDetailsButtons = document.querySelectorAll('.view-details');
const caseModal = document.getElementById('caseModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalCloseButtons = document.querySelectorAll('.modal-close');

// 案例数据
const caseData = {
    case1: {
        title: "从零基础到前端工程师 - 学习历程",
        content: `
        <div class="case-detail">
            <h3>学习概述</h3>
            <p>这是一个从零基础开始，经过6个月系统学习成为前端工程师的完整历程记录。整个学习过程分为4个主要阶段，每个阶段都有明确的学习目标和项目实践。</p>
            
            <div class="highlight-box">
                <p><strong>学习成果：</strong>掌握HTML/CSS基础、JavaScript进阶、React框架应用，完成24个实战项目，成功通过技术面试获得前端开发职位。</p>
            </div>
            
            <h3>学习时间线</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>第1-2月：HTML/CSS基础</h4>
                    <p>学习HTML5标签、CSS3样式、响应式设计和Flexbox/Grid布局。</p>
                    <ul>
                        <li>完成个人简历网站</li>
                        <li>制作响应式博客页面</li>
                        <li>学习UI设计基础</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第3-4月：JavaScript进阶</h4>
                    <p>深入学习JavaScript核心概念、DOM操作、异步编程和ES6+特性。</p>
                    <ul>
                        <li>开发待办事项应用</li>
                        <li>实现天气API查询应用</li>
                        <li>学习AJAX和Fetch API</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第5月：React框架学习</h4>
                    <p>掌握React组件、状态管理、Hooks和路由。</p>
                    <ul>
                        <li>构建React电商前端页面</li>
                        <li>学习Redux状态管理</li>
                        <li>掌握React Router路由配置</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第6月：项目实战与求职准备</h4>
                    <p>完成综合性项目，准备作品集和技术面试。</p>
                    <ul>
                        <li>开发个人博客系统</li>
                        <li>学习前端性能优化</li>
                        <li>准备技术面试题库</li>
                    </ul>
                </div>
            </div>
            
            <h3>学习资源推荐</h3>
            <ul>
                <li><strong>在线课程：</strong>Udemy现代JavaScript完全指南、Coursera前端开发专项课程</li>
                <li><strong>文档学习：</strong>MDN Web Docs、React官方文档</li>
                <li><strong>实战平台：</strong>Codecademy、freeCodeCamp</li>
            </ul>
            
            <h3>避坑指南</h3>
            <ul>
                <li>不要跳过基础直接学习框架，扎实的HTML/CSS/JS基础非常重要</li>
                <li>学习过程中要多动手实践，不能只看视频或文档</li>
                <li>遇到问题时尝试自己解决，培养独立思考和调试能力</li>
                <li>定期回顾和总结所学知识，形成知识体系</li>
                <li>加入技术社区，与其他学习者交流经验</li>
            </ul>
        </div>
        `
    },
    case2: {
        title: "日语N1备考全记录 - 学习历程",
        content: `
        <div class="case-detail">
            <h3>备考概述</h3>
            <p>这是一份为期8个月的日语能力考N1级别备考完整记录，包含听力、阅读、写作和词汇语法的全面训练方法。</p>
            
            <div class="highlight-box">
                <p><strong>备考成果：</strong>掌握1200个核心词汇，400个关键语法点，听力得分85%，阅读得分70%，顺利通过N1考试。</p>
            </div>
            
            <h3>学习时间线</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>第1-2月：基础巩固</h4>
                    <p>复习N2词汇和语法，为N1考试打基础。</p>
                    <ul>
                        <li>每天记忆30个N1词汇</li>
                        <li>复习N2核心语法</li>
                        <li>开始N1听力练习</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第3-4月：词汇与语法强化</h4>
                    <p>系统学习N1词汇和语法。</p>
                    <ul>
                        <li>完成《新完全掌握日语能力考试N1词汇》</li>
                        <li>学习《蓝宝书N1语法》</li>
                        <li>开始阅读N1难度文章</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第5-6月：专项训练</h4>
                    <p>针对听力、阅读、文法进行专项训练。</p>
                    <ul>
                        <li>每天2小时听力练习</li>
                        <li>每周5篇N1阅读练习</li>
                        <li>整理错题集，定期复习</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第7-8月：模拟考试与冲刺</h4>
                    <p>进行模拟考试，查漏补缺。</p>
                    <ul>
                        <li>每周1-2套完整模拟题</li>
                        <li>重点复习高频词汇和语法</li>
                        <li>调整心态，保持良好作息</li>
                    </ul>
                </div>
            </div>
            
            <h3>学习资源推荐</h3>
            <ul>
                <li><strong>词汇书：</strong>《新完全掌握日语能力考试N1词汇》、《N1词汇速记》</li>
                <li><strong>语法书：</strong>《蓝宝书N1语法》、《完全掌握N1语法》</li>
                <li><strong>听力材料：</strong>NHK新闻、历年真题听力</li>
                <li><strong>APP推荐：</strong>Anki记忆卡片、Quizlet</li>
            </ul>
            
            <h3>词汇记忆技巧</h3>
            <ul>
                <li>使用间隔重复法记忆单词，定期复习</li>
                <li>通过例句记忆单词，理解单词在具体语境中的用法</li>
                <li>制作单词卡片，利用碎片时间复习</li>
                <li>将单词分类记忆，如按主题、词性等</li>
                <li>结合听力和阅读，在实际使用中记忆单词</li>
            </ul>
            
            <h3>避坑指南</h3>
            <ul>
                <li>不要死记硬背词汇，要理解词汇的用法和搭配</li>
                <li>听力练习要循序渐进，从简单到复杂</li>
                <li>考前一周要调整作息，保证充足睡眠</li>
                <li>考试时注意时间分配，不要在一道题上花费过多时间</li>
                <li>平时要注重积累，临时抱佛脚效果有限</li>
            </ul>
        </div>
        `
    },
    case3: {
        title: "UI设计学习历程 - 从入门到就业",
        content: `
        <div class="case-detail">
            <h3>学习概述</h3>
            <p>这是一个为期4个月的UI设计学习历程记录，从设计原理入门到Figma实战，最终成功获得UI设计师职位。</p>
            
            <div class="highlight-box">
                <p><strong>学习成果：</strong>掌握设计原理、色彩理论、排版技巧，熟练使用Figma等设计工具，完成50个设计练习和15个完整项目，打造专业作品集。</p>
            </div>
            
            <h3>学习时间线</h3>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>第1月：设计基础学习</h4>
                    <p>学习设计原理、色彩理论、排版和用户体验基础。</p>
                    <ul>
                        <li>完成设计基础课程学习</li>
                        <li>练习色彩搭配和排版</li>
                        <li>分析优秀设计作品</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第2月：设计工具掌握</h4>
                    <p>学习Figma、Photoshop、Illustrator等设计工具。</p>
                    <ul>
                        <li>掌握Figma基础操作和高级功能</li>
                        <li>学习UI组件设计和设计系统</li>
                        <li>完成基础图标和界面设计练习</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第3月：界面设计实战</h4>
                    <p>进行实际UI界面设计项目练习。</p>
                    <ul>
                        <li>设计移动应用界面</li>
                        <li>设计网页界面</li>
                        <li>学习交互设计原则</li>
                    </ul>
                </div>
                <div class="timeline-item">
                    <h4>第4月：作品集打造与求职</h4>
                    <p>整理项目，打造专业作品集，准备求职。</p>
                    <ul>
                        <li>选择3-5个最佳项目进行优化</li>
                        <li>制作在线作品集网站</li>
                        <li>准备设计案例讲解和面试</li>
                    </ul>
                </div>
            </div>
            
            <h3>学习资源推荐</h3>
            <ul>
                <li><strong>在线课程：</strong>UI Design Fundamentals、Figma UI Design</li>
                <li><strong>设计灵感：</strong>Dribbble、Behance、Pinterest</li>
                <li><strong>工具学习：</strong>Figma官方教程、YouTube设计教程</li>
                <li><strong>书籍推荐：</strong>《写给大家看的设计书》、《用户体验要素》</li>
            </ul>
            
            <h3>设计思维培养</h3>
            <ul>
                <li>学会从用户角度思考问题</li>
                <li>培养对细节的敏感度</li>
                <li>练习分析和批判性思考</li>
                <li>建立自己的设计风格</li>
                <li>学会接受反馈并不断改进</li>
            </ul>
            
            <h3>设计规范制定</h3>
            <ul>
                <li>建立一致的色彩系统</li>
                <li>制定排版规范</li>
                <li>创建可复用的组件库</li>
                <li>编写设计文档</li>
                <li>确保设计的可实现性</li>
            </ul>
            
            <h3>作品集打造经验</h3>
            <ul>
                <li>选择能展示不同技能的项目</li>
                <li>详细记录设计过程和思考</li>
                <li>展示设计迭代过程</li>
                <li>突出解决问题的能力</li>
                <li>确保作品集网站的设计和用户体验</li>
            </ul>
            
            <h3>避坑指南</h3>
            <ul>
                <li>不要只注重美观而忽视用户体验</li>
                <li>设计稿要考虑开发实现的可行性</li>
                <li>不要过度依赖设计工具的模板</li>
                <li>要学会接受批评和反馈</li>
                <li>保持学习新设计趋势和技术</li>
            </ul>
        </div>
        `
    }
};

// 打开模态框函数
function openModal(caseId) {
    const caseInfo = caseData[caseId];
    if (caseInfo) {
        modalTitle.textContent = caseInfo.title;
        modalContent.innerHTML = caseInfo.content;
        caseModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
}

// 关闭模态框函数
function closeModal() {
    caseModal.classList.remove('active');
    document.body.style.overflow = ''; // 恢复背景滚动
}

// 为查看详情按钮添加点击事件
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const caseId = button.getAttribute('data-id');
        openModal(caseId);
    });
});

// 为关闭按钮添加点击事件
modalCloseButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});

// 点击模态框外部关闭模态框
caseModal.addEventListener('click', (e) => {
    if (e.target === caseModal) {
        closeModal();
    }
});

// 按ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && caseModal.classList.contains('active')) {
        closeModal();
    }
});

// 常见问题手风琴效果
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // 切换当前问题的激活状态
        question.classList.toggle('active');
        
        // 获取对应的答案元素
        const answer = question.nextElementSibling;
        
        // 切换答案的显示状态
        answer.classList.toggle('show');
    });
});

// 联系表单提交功能
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 这里可以添加表单验证逻辑
        
        // 模拟表单提交成功
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        console.log('表单数据:', formValues);
        
        // 显示成功消息
        alert('感谢您的留言！我们会尽快回复您。');
        
        // 重置表单
        contactForm.reset();
    });
}