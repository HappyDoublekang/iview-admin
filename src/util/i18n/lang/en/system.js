export default {
  systemLeftTab: {
    hospital: 'Hospital',
    user: 'Users',
    role: 'Roles',
    department: 'Department',
    grid: 'Monitoring'
  },
  userLabel: {
    name: 'Name',
    email: 'E-mail',
    id: 'EmpID',
    username: 'Login Name',
    role: 'Role',
    privileges: 'Dept.Privileges',
    expiry: 'Expiry Date',
    active: 'Active'
  },
  tableBtn: {
    add: 'Add Users',
    del: 'Delete Users',
    edit: 'Edit'
  },
  tableHead: {
    Name: 'Name',
    ID: 'ID',
    Username: 'Username',
    Privileges: 'Privileges',
    Expiration: 'Expiry Date',
    ActivitedUser: 'Active'
  },
  columns: [
    {
      title: 'Emp ID',
      dataIndex: 'workNumber',
      width: '10%'
    },
    {
      title: 'Login Name',
      dataIndex: 'account',
      width: '10%'
    },
    {
      title: 'Name',
      dataIndex: 'nickname',
      width: '10%'
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      width: '10%'
    },
    {
      title: 'Role',
      dataIndex: 'roleEntityList',
      scopedSlots: {
        customRender: 'role'
      },
      width: '13%'
    },
    {
      title: 'Dept Privileges',
      dataIndex: 'departmentEntityList',
      scopedSlots: {
        customRender: 'depart'
      },
      width: '15%'
    },
    {
      title: 'Expiry Date',
      dataIndex: 'validDate',
      width: '13%'
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      scopedSlots: {
        customRender: 'status'
      },
      width: '8%'
    },
    {
      title: 'Operation',
      dataIndex: 'Action',
      scopedSlots: {
        customRender: 'action'
      },
      width: '15%'
    }
  ],
  checkModal: 'View User',
  checkList: {
    name: 'Name',
    username: 'Username',
    email: 'E-mail',
    password: 'Password',
    ID: 'EmpID',
    Roles: 'Roles',
    date: 'Expiry Date',
    dept: 'Dept.Privileges',
    homepage: 'HomePage',
    logout: 'Logout Time',
    active: 'Active'
  },
  checkUser: {
    edit: 'Edit',
    cancel: 'Cancel',
    save: 'Save'
  },
  reset: 'Reset',
  roleManage: {
    viewRole: 'View Role',
    editRole: 'Edit the Role',
    priv: 'Privileges',
    tableBtn: {
      add: 'Add Roles',
      del: 'Delete Roles'
    },
    // 角色列表表格
    columns: [
      {
        title: 'Role Name',
        dataIndex: 'roleName',
        width: '15%',
        scopedSlots: {
          customRender: 'roleName'
        }
      },
      {
        title: 'Total Users',
        dataIndex: 'userCount',
        width: '15%'
      },
      {
        title: 'Privileges',
        dataIndex: 'permissionList',
        width: '30%',
        scopedSlots: {
          customRender: 'permissionList'
        }
      },
      {
        title: 'Description',
        dataIndex: 'description',
        width: '20%',
        scopedSlots: {
          customRender: 'description'
        }
      },
      {
        title: 'Operation',
        dataIndex: 'action',
        scopedSlots: {
          customRender: 'action'
        },
        width: '15%'
      }
    ],
    addRoleBtn: {
      reset: 'Reset'
    },
    addRoles: 'Add Roles',
    description: 'Description',
    addRoleCheckBoxText: 'Allow the role to configure "Auto Logout After"?',
    rolename: 'Role Name',
    allocation: 'Privileges Allocation',
    // 添加权限复选框域
    addRoleTable: {
      module: 'Module',
      sub: 'Sub-module',
      device: 'Device',
      software: 'Software Upgrade',
      drugLib: 'Drug Library',
      database: 'Database',
      treatment: 'Treatment',
      patients: 'Patients',
      alarms: 'Alarms',
      devices: 'Devices',
      systemLogs: 'System Logs',
      architect: 'Dept. Architect',
      network: 'Network Settings',
      download: 'Download Settings',
      router: 'Router Settings',
      home: 'Homepage',
      basci: 'Basci Settings'
    }
  },
  hospitalManage: {
    hospitalName: 'Hospital Name',
    shortName: 'Short Name',
    departShort: 'Short Name',
    comfirm: 'Comfirm',
    departManager: 'Department Manager',
    addShort: 'Dept. PIC',
    editDepart: 'Edit Department Info',
    delDepart: 'Delete Departmen',
    addDepart: 'Add Department',
    department: 'Department',
    checkDepart: 'View Department',
    allBed: 'Total Beds',
    allPump: 'Total Pumps',
    deptAdmin: 'Dept Administrator',
    addRooms: 'Add Room',
    addRoomsBulk: 'Add Room in Bulk',
    directlyAddBed: 'Directly Add Bed',
    roomPic: 'Room PIC',
    roomNo: 'Room No',
    roomPrefix: 'Room prefix',
    numberRooms: 'Number of Rooms',
    startEnd: 'Start-end Beds',
    roomSetting: 'Room Settings',
    viewRoom: 'View Room',
    editRoom: 'Edit Room Info',
    room: 'Room',
    bed: 'Bed',
    addBed: 'Add Bed',
    bedNo: 'Bed NO',
    charge: 'Nurse in Charge',
    numberBed: 'Number of Beds',
    viewBed: 'View Bed',
    editBed: 'Edit Beds',
    bedSettings: 'Bed Settings',
    bedPrefix: 'Bed prefix',
    startEndBeds: 'Start-end Beds',
    // 科室表格
    hospitalDepartColumns: [
      {
        title: 'Department Name',
        dataIndex: 'name',
        width: '20%',
        ellipsis: true,
        scopedSlots: { customRender: 'name' }
      },
      {
        title: 'Total pumps',
        dataIndex: 'pumpsCount',
        width: '10%'
      },
      {
        title: 'Number of Rooms',
        dataIndex: 'roomsCount',
        width: '15%'
      },
      {
        title: 'Dept.PIC',
        dataIndex: 'departmentManager',
        width: '15%',
        scopedSlots: { customRender: 'departmentManager' }
      },
      {
        title: 'E-mail',
        dataIndex: 'email',
        width: '15%'
      },
      {
        title: 'Operation',
        dataIndex: 'action',
        scopedSlots: {
          customRender: 'action'
        },
        width: '20%'
      }
    ],
    // 病房表格
    hospitalRoomColumns: [
      {
        title: 'Room No.',
        dataIndex: 'name',
        width: '15%'
      },
      {
        title: 'Room PIC',
        dataIndex: 'roomManager',
        width: '20%'
      },
      {
        title: 'E-mail',
        dataIndex: 'email',
        width: '15%'
      },
      {
        title: 'Total pumps',
        dataIndex: 'pumps',
        width: '15%'
      },
      {
        title: 'Operation',
        dataIndex: 'action',
        scopedSlots: {
          customRender: 'action'
        },
        width: '15%'
      }
    ],
    hospitalBedColumns: [
      {
        title: 'Bed NO.',
        dataIndex: 'name',
        width: '10%'
      },
      {
        title: 'Nurse in Charge',
        dataIndex: 'bedManager',
        width: '20%'
      },
      {
        title: 'Description',
        dataIndex: 'description',
        width: '40%'
      },
      {
        title: 'Operation',
        dataIndex: 'action',
        scopedSlots: {
          customRender: 'action'
        },
        width: '15%'
      }
    ]
  },
  startTime: 'Start Time',
  endTime: 'End Time',
  // 图标提示
  view: 'View',
  edit: 'Edit',
  // 新 快捷添加中英文
  quicklyGenerate: 'Quickly Generate',
  deptName: 'Dept Name',
  deptEmpty: 'Dept cannot be empty',
  roomEmpty: 'Number of Rooms cannot be empty',
  roomStartEmpty: 'Number of Start Rooms cannot be empty',
  bedStartEmpty: 'Number of Start Beds cannot be empty',
  bedEmpty: 'Number of beds cannot be empty',
  startEmpty: 'Start Room cannot be empty',
  plzEnterNum: 'Please enter the number',
  plzEnterStartNum: 'Please enter the start room number',
  plzEnterName: 'Please enter the name',
  startRoom: 'Start Room',
  endRoom: 'End Room',
  endBed: 'End Bed',
  startBed: 'Start Bed',
  room50: 'Number of Rooms cannot greater than 50',
  // 角色勾选 多语言
  输注监护: 'Infusion Monitoring',
  历史回顾: 'Event Log',
  系统管理: 'System Management',
  药物库: 'Drug Library',
  更多: 'Settings',
  治疗信息: 'Treatment',
  病人信息: 'Patients',
  设备信息: 'Devices',
  报警信息: 'Alarms',
  系统日志: 'System Logs',
  医院管理: 'Hospital',
  用户管理: 'Users',
  角色管理: 'Roles',
  实景绘制: 'Dept. Architect',
  数据库管理: 'Database',
  基础设置: 'General Settings',
  网络设置: 'Network Settings',
  软件升级: 'Software Upgrade',
  路由器设置: 'Router Settings',
  审核: 'Approve',
  下发: 'Issued to the pump',
  编辑: 'Edit',
  // 默认角色中英文
  科室管理员: 'Dept Administrator',
  超级管理员: 'Administrator',
  医护人员: 'Medical Staff',
  药剂师: 'Pharmacist',
  设备科: 'Equipment Manager',
  // 默认主页中英文
  信息管理: 'Info Management',
  设置: 'Settings',
  设备管理: 'Device',
  药物库管理: 'Drug Library',
  软件下载设置: 'Download Settings',
  isDelRole: 'Whether to confirm to delete this role ?',
  isDelUser: 'Whether to confirm to delete this user ?',
  OK: 'OK',
  bedFull: 'Bed is full',
  accAlreadyExists: 'Account already exists',
  workNumAlreadyExists: 'ID already exists',
  inputName: 'Please enter your name',
  departName: 'Please select your department',
  inputUsername: 'Please enter your login name',
  inputEmail: 'Please input your Email',
  selectedRole: 'Please selected your role!',
  emailType: 'Please enter the correct mail format',
  accWillExpire: 'The account will expire in',
  days: 'days.',
  plzInputName: 'Please input your role name!',
  selectBeds: 'Select Beds',
  roomName: 'Room Name',
  beds: 'Beds',
  selectARoom: 'Please select a room!',
  resetSucc:
    'The password has been reset to the initial value. Click Save to take effect ',
  departmentTable: 'departments',
  clickToSet: 'Click to set the Hospital Name…',
  set: 'Set',
  nameEmpty: 'Hospital Name cannot be empty !',
  shortEmpty: 'Short Name cannot be empty !',
  saveSucc: 'Save successfully !',
  departIsEmpty: 'Department cannot be empty !',
  roomIsEmpty: 'Room NO. cannot be empty !',
  bedIsEmpty: 'Bed NO. cannot be empty !',
  rightEmail: 'Please input a correct email !',
  addSuccess: 'Add Success',
  editSuccess: 'Edit Success',
  delSuccess: 'Delete Success',
  room: 'rooms',
  bed: 'beds',
  roomThan50: 'Out of range limit, please input again !',
  bedOutoffLimit: 'The number of beds exceed upper limit:50!',
  roomOutoffLimit: 'The number of rooms exceed upper limit:50!',
  departmentOutoffLimit: 'The number of departments exceed upper limit:50!',
  batchAddRoom: 'Total rooms exceed the upper limit !',
  batchAddBed: 'Total bed exceed the upper limit !',
  inputText: 'please input text！',
  inputNum: 'please input number !',
  repeatRooms: 'Repeat rooms, please reset !',
  repeatBed: 'Repeat beds, please reset !',
  roomLessThan: 'The number of rooms cannot be less than the number of beds.',
  departMore50: '',
  roomMore50: '',
  bedMore50: '',
  loginName: 'Login Name',
  mustBeAssigned: 'All beds must be assigned !',
  repeatDepartments: 'Repeat departments, please reset !',
  delDepart:
    'Deleting the department will delete the rooms and beds information under it. Confirm deletion?',
  delRoom:
    'Deleting the room will delete the beds information under it. Confirm deletion?',
  delBed: 'Confirm to delete the bed?',
  roleExist: 'This role already exist',
  roleLimit: 'The number of roles exceed the upper limit!',
  scenerioArchitect: 'Scenerio Architect',
  architect: 'Architect',
  gridView: 'Grid View',
  scenerioView: 'Scenerio View',
  needRestart: 'Note: Effective after re-login',
  goToScenerio: 'Please go to Scenerio Architect…',
  goToGrid: 'Please establish wards in Department…',
  noData: 'No Data…',
  goToAddRoom: 'Please establish wards in Hospital',
  isSaveScenerioArchitect: 'Do you save the scenerio drawing?',
  // 实景绘制------------------
  roooms: 'Rooms',
  bedsOnly: 'Beds only',
  nurseOffice: 'Nurse Office',
  displayGrid: 'Display Grid',
  help: 'Help',
  bedSize: 'Bed size',
  large: 'Large',
  medium: 'Medium',
  small: 'Small',
  totalRoom: 'Total Rooms',
  totalBed: 'Total Beds',
  totalFun: 'Total Function Rooms',
  isArchitected: 'The scenery of department is being architected !',
  // 科室设置中英文
  wardView: 'Ward View',
  viewSettings: 'View Settings',
  schematic: 'Schematic',
  architecture: 'Architecture',
  alarmConfiguration: 'Alarm Configuration',
  alarmSound: 'Alarm Sound',
  nurseCall: 'Nurse Call',
  alarmMuting: 'Alarm Muting',
  alarmFilter: 'Alarm filter',
  all: 'All',
  mediumAndHigh: 'Medium and High',
  high: 'High',
  remainingTimeSettings: 'Remaining Time Settings',
  remainingTimeMin: 'Remaining Time(min)',
  otherSettings: 'Other Settings',
  vacantSlotInInfusionDetailsList: 'Vacant slot in Infusion Details List',
  displayVacantSlot: 'Display Vacant slot',
  hideVacantSlot: 'Hide Vacant slot',
  mustInfo: 'Must complete info',
  orangeBar: 'the value must be less than the yellow  one',
  yellowBar: 'the value must be more than the orange  one',
  editHosName: 'Edit Hospital Name',
  devices: 'Devices',
  license: 'License'
}
