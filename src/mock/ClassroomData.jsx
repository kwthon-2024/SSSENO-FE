const classroomData = {
    classrooms: [
        // Page 1
        { Building_title: "새빛관", Place_title: "101호", capacity: 30, rating: 4 },
        { Building_title: "비마관", Place_title: "102호", capacity: 40, rating: 5 },
        { Building_title: "한울관", Place_title: "103호", capacity: 60, rating: 3 },
        { Building_title: "참빛관", Place_title: "104호", capacity: 50, rating: 4 },
        { Building_title: "기념관", Place_title: "105호", capacity: 80, rating: 2 },
        { Building_title: "한천재", Place_title: "106호", capacity: 100, rating: 5 },
        { Building_title: "새빛관", Place_title: "107호", capacity: 50, rating: 3 },
        { Building_title: "비마관", Place_title: "108호", capacity: 30, rating: 4 },
        { Building_title: "한울관", Place_title: "109호", capacity: 40, rating: 5 },
        { Building_title: "참빛관", Place_title: "110호", capacity: 60, rating: 2 },
        // Page 2
        { Building_title: "기념관", Place_title: "201호", capacity: 100, rating: 3 },
        { Building_title: "한천재", Place_title: "202호", capacity: 80, rating: 4 },
        { Building_title: "새빛관", Place_title: "203호", capacity: 30, rating: 4 },
        { Building_title: "비마관", Place_title: "204호", capacity: 50, rating: 5 },
        { Building_title: "한울관", Place_title: "205호", capacity: 40, rating: 2 },
        { Building_title: "참빛관", Place_title: "206호", capacity: 30, rating: 3 },
        { Building_title: "기념관", Place_title: "207호", capacity: 60, rating: 4 },
        { Building_title: "한천재", Place_title: "208호", capacity: 40, rating: 5 },
        { Building_title: "새빛관", Place_title: "209호", capacity: 80, rating: 4 },
        { Building_title: "비마관", Place_title: "210호", capacity: 100, rating: 3 },
        // Page 3
        { Building_title: "한울관", Place_title: "301호", capacity: 30, rating: 5 },
        { Building_title: "참빛관", Place_title: "302호", capacity: 50, rating: 4 },
        { Building_title: "기념관", Place_title: "303호", capacity: 60, rating: 3 },
        { Building_title: "한천재", Place_title: "304호", capacity: 80, rating: 5 },
        { Building_title: "새빛관", Place_title: "305호", capacity: 100, rating: 4 },
        { Building_title: "비마관", Place_title: "306호", capacity: 30, rating: 4 },
        { Building_title: "한울관", Place_title: "307호", capacity: 40, rating: 5 },
        { Building_title: "참빛관", Place_title: "308호", capacity: 50, rating: 3 },
        { Building_title: "기념관", Place_title: "309호", capacity: 60, rating: 4 },
        { Building_title: "한천재", Place_title: "310호", capacity: 40, rating: 5 },
        // Page 4
        { Building_title: "새빛관", Place_title: "401호", capacity: 80, rating: 4 },
        { Building_title: "비마관", Place_title: "402호", capacity: 100, rating: 3 },
        { Building_title: "한울관", Place_title: "403호", capacity: 30, rating: 5 },
        { Building_title: "참빛관", Place_title: "404호", capacity: 40, rating: 4 },
        { Building_title: "기념관", Place_title: "405호", capacity: 60, rating: 3 },
        { Building_title: "한천재", Place_title: "406호", capacity: 50, rating: 5 },
        { Building_title: "새빛관", Place_title: "407호", capacity: 30, rating: 4 },
        { Building_title: "비마관", Place_title: "408호", capacity: 80, rating: 5 },
        { Building_title: "한울관", Place_title: "409호", capacity: 100, rating: 3 },
        { Building_title: "참빛관", Place_title: "410호", capacity: 60, rating: 4 },
    ],
    pagination: {
        per_page: 10,
        total_items: 40,
        total_pages: 4,
    },
};

// 페이지 데이터 추출 함수
export const getPageData = (page) => {
    const { classrooms, pagination } = classroomData;
    const start = (page - 1) * pagination.per_page;
    const end = start + pagination.per_page;
    const currentPageClassrooms = classrooms.slice(start, end);

    return {
        classrooms: currentPageClassrooms,
        pagination: {
            ...pagination,
            current_page: page,
        },
    };
};

export default classroomData;
