var afterMail = [
    {
        "id": 1,
        "name": "Notion",
        "title": "Notion 팀스페이스에서 팀원들과 함께하세요.",
        "content": "이 메일을 팀원과 함께 공유하세요. 윤주영님이 나를 SW 동행 프로젝트 ...",
        "date": "2024.10.23 14:30"
    },
    {
        "id": 2,
        "name": "선생님_홍길동(클래스룸)",
        "title": "새 과제: 2-1반 프로젝트 작업한 내용 공유",
        "content": "- 알림설정 2024 JAVA 새 과제 프로젝트 작성 과정 오늘 작업한 것을 기록함",
        "date": "2024.10.22 15:30"
    },
    {
        "id": 3,
        "name": "선생님_고길동(클래스룸)",
        "title": "새 과제: 2-1반 프로젝트 작업한 내용 공유",
        "content": "- 알림설정 2024 새 과제 프로젝트 작성 과정 오늘 작업한 것을 기록함",
        "date": "2024.10.20 14:30"
    },
    {
        "id": 4,
        "name": "Figma",
        "title": "Edit request from 윤주영 (s2329@e-mirim.hs.kr)",
        "content": "- 윤주영님이 호주 프젝 페이지를 편집했습니다. 2024년 10월 9일 오후 10:31",
        "date": "2024.10.9 22:31"
    },
    {
        "id": 5,
        "name": "Adobe",
        "title": "Google 계정 새로 연결됨",
        "content": "이제 귀하의 Google 계정이 Adobe 계정과 연결되며 로그인하는 데 사용할 수 있습니다...",
        "date": "2024.10.8 10:3"
    }
]

var mailListContainer = document.querySelector('.mail-list-container');
afterMail.forEach(function(mail) {
    var mailItem = `
        <div class="mail-item">
            <div class="mail-info">
                <input type="checkbox" class="mail-checkbox">
                <img src="/image/warning.png" alt="" class="warning-icon">
                <div class="mail-name">${mail.name}</div>
            </div>
            <div class="info">
                <div class="mail-content">${mail.content}</div>
                <div class="mail-time">${mail.date}</div>
            </div>
        </div>
    `;
    mailListContainer.innerHTML += mailItem; // 메일 항목을 동적으로 추가
});
