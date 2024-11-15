const classroomFilterSearchData = {
    classrooms: Array.from({ length: 40 }, (_, i) => {
        const buildings = ["새빛관", "비마관", "한울관", "참빛관", "기념관", "한천재"];
        const types = ["교실형", "계단식"];
        const deskTypes = ["일체형 책상", "분리형 책상", "반원형 책상"];
        const capacities = [20, 40, 50, 70, 100]; // 수용 인원 값

        return {
            Building_title: buildings[i % buildings.length], // 순환 선택
            Place_title: `${Math.floor(i / 10) + 1}0${i % 10 + 1}호`, // 예: 101호, 102호
            Type: types[i % types.length],
            capacity: capacities[i % capacities.length], // 수용 인원 추가
            Has_projector: Math.random() < 0.5, // 랜덤 true/false
            Has_mic: Math.random() < 0.5, // 랜덤 true/false
            Desk_type: deskTypes[i % deskTypes.length],
        };
    }),
};

export default classroomFilterSearchData;
