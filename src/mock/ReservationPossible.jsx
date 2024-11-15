// ReservationPossible.jsx
import classroomData from './ClassroomData';

// 무작위 시간표 생성 함수
function generateRandomTimetable() {
    const times = Array.from({ length: 9 }, (_, i) => i + 1); // [1, 2, ..., 9]
    const count = Math.floor(Math.random() * 9) + 1; // 1~9개의 랜덤 길이
    return times.sort(() => Math.random() - 0.5).slice(0, count); // 섞고 일부 선택
}

// 강의실 데이터를 기반으로 더미 데이터 생성
const reservationData = classroomData.classrooms.map((classroom, index) => ({
    Place_ID: `${index + 1}`, // 강의실 ID
    building_name: classroom.Building_title, // 건물 이름
    Place_title: classroom.Place_title, // 강의실 이름
    Possible_timetable: generateRandomTimetable(), // 예약 가능한 시간
}));

// 결과 데이터 내보내기
export default reservationData;
