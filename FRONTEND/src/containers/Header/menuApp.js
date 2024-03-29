export const adminMenu = [
    { //quản lý người dùng
        name: 'menu.admin.manage-cat',
        menus: [
            {
                name: 'menu.admin.add-cat', link: '/system/add-cat'
            },
            {
                name: 'menu.admin.list-cat', link: '/system/list-cat'
            },
        ]
    },
    { //quản lý phòng khám
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'
            },
        ]
    },
    { //quản lý chuyên khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manage-specialty'
            },
        ]
    },
    { //quản lý cẩm nang
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage-handbook', link: '/system/manage-handbook'
            },
        ]
    },
];


export const doctorMenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [
            { //quản lý kế hoạch khám bệnh bác sĩ

                name: 'menu.doctor.manage-shedule', link: '/doctor/manage-shedule'

            },
            { //quản lý kế hoạch bệnh nhân của bác sĩ

                name: 'menu.doctor.manage-patient', link: '/doctor/manage-patient'

            },
        ]
    }


];