-- CREATE TABLE successor(
	-- USER_ID VARCHAR2(24) PRIMARY KEY,
  -- username  VARCHAR2(64) NOT NULL,
  -- area_name VARCHAR2(32),
  -- dorm_name VARCHAR2(32)
	-- );
	
--------------------------------successor---------------------------------------------
	
insert into successor values ('test_usrid_1', 'user1', '华山区','14栋612');
insert into successor values ('test_usrid_2', 'user2', '泰山区','8栋410');
insert into successor values ('test_usrid_3', 'user3', '黑山区','2栋312');
insert into successor values ('test_usrid_4', 'user4', '启林区','1栋212');

--------------------------------successor---------------------------------------------

--------------------------------suc_stuff---------------------------------------------

insert into suc_stuff values ('10001','test_usrid_1','山灵M0','山灵便携播放器','m0.png','数码','2018/07/07');
insert into suc_stuff values ('10002','test_usrid_1','艾巴索DX150','艾巴索播放器','dx150.png','数码','2018/07/08');
insert into suc_stuff values ('10003','test_usrid_2','四级词汇书','新东方四级单词书','siji.png','书籍','2018/07/09');
insert into suc_stuff values ('10004','test_usrid_2','六级词汇书','新东方六级单词书','liuji.png','书籍','2018/07/10');
insert into suc_stuff values ('10005','test_usrid_2','无印笔盒','','bihe.png','文具','2018/07/11');
insert into suc_stuff values ('10006','test_usrid_2','三菱笔芯','','bixin.png','文具','2018/07/11');
insert into suc_stuff values ('10007','test_usrid_3','蓝牙鼠标','','shubiao.png','数码','2018/07/11');

--------------------------------suc_stuff---------------------------------------------

--------------------------------suc_request---------------------------------------------

insert into suc_request values('10001','test_usrid_3',-1)
insert into suc_request values('10002','test_usrid_3',0)
insert into suc_request values('10003','test_usrid_3',1)
insert into suc_request values('10004','test_usrid_4',1)
insert into suc_request values('10005','test_usrid_4',1)
insert into suc_request values('10006','test_usrid_4',1)

--------------------------------suc_request---------------------------------------------

--------------------------------suc_process---------------------------------------------

insert into suc_process values('10003','2018/07/10/18:00','2018/07/10/22:00',0,0,null)
insert into suc_process values('10004','2018/07/10/13:00','2018/07/10/18:00',1,0,null)
insert into suc_process values('10005','2018/07/10/14:00','2018/07/10/20:00',0,1,null)
insert into suc_process values('10006','2018/07/10/8:00','2018/07/10/13:00',1,1,2018/07/12/14:32)

--------------------------------suc_process---------------------------------------------


 -- CREATE TABLE suc_stuff(
	-- suc_id NUMBER(32) PRIMARY KEY,
    -- USER_ID VARCHAR2(64) NOT NULL,
  -- suc_title VARCHAR2(128),
  -- suc_intro VARCHAR2(1024),
  -- suc_pic_url VARCHAR2(32),
  -- suc_class VARCHAR2(32),
  -- suc_publish_time VARCHAR2(32),
  -- foreign key (user_id) references successor(user_id) on delete cascade
  -- );
  values(USER_ID
  suc_title
  suc_intro
  suc_pic_url
  suc_class
  suc_publish_time
--suc_id设置为自增长，每次新增继承物品，不需要插入suc_id,
--真实情况：pic_id是等待用户把书籍图片上传后，服务器保存到本地后，得到的。
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','天天向上 书籍', '好书值得拥有大叔大婶调度阿萨德打阿萨德撒多按时的萨达的阿萨德撒打算啊','./images/123213.jpg','书籍','20180706214950');

  