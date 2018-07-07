--ANSI编码
-- CREATE TABLE successor(
	-- USER_ID VARCHAR2(24) PRIMARY KEY,
  -- username  VARCHAR2(64) NOT NULL,
  -- area_name VARCHAR2(32),
  -- dorm_name VARCHAR2(32)
	-- );
--继承者	
--------------------------------successor---------------------------------------------
	
insert into successor values ('test_usrid_1', 'user1', '华山区','14栋612');
insert into successor values ('test_usrid_2', 'user2', '泰山区','8栋410');
insert into successor values ('test_usrid_3', 'user3', '黑山区','2栋312');
insert into successor values ('test_usrid_4', 'user4', '启林区','1栋212');

--可以尝试做出 继承物的生命周期
--时序图、状态机图等等（软件工程应用）
--------------------------------successor---------------------------------------------
--处于发布状态的物品 图片url 使用物品id 和 时间 联合命名
--------------------------------suc_stuff---------------------------------------------

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','山灵M0','山灵便携播放器','./images/1-201807051010.png','数码','2018/07/05/10:10');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','艾巴索DX150','艾巴索播放器','./images/2-201807052025.png','数码','2018/07/05/20:25');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','四级词汇书','新东方四级单词书','./images/3-201807062025.png','书籍','2018/07/06/20:25');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','六级词汇书','新东方六级单词书','./images/4-201807072025.png','书籍','2018/07/07/20:25');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','无印笔盒','','./images/5-201807082025.png','文具','2018/07/08/20:25');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','三菱笔芯','','./images/6-201807092025.png','文具','2018/07/09/20:25');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_3','蓝牙鼠标','','./images/7-201807102025.png','数码','2018/07/10/20:25');

--------------------------------suc_stuff---------------------------------------------
 -- CREATE TABLE suc_request(
     -- suc_id NUMBER(32) PRIMARY KEY,
     -- user_id VARCHAR2(64) NOT NULL,
     -- comfirm_give_flag NUMBER(1),
     -- request_time VARCHAR2(32),
     -- foreign key (user_id) references successor(user_id) on delete cascade,
     -- --用户名一般不会被注销，删除，除非管理员操作
     -- foreign key (suc_id) references suc_stuff(suc_id) on delete cascade
-- );
--处于请求状态的物品
--------------------------------suc_request---------------------------------------------

insert into suc_request values('1','test_usrid_3',-1,'2018/07/09/20:25');
insert into suc_request values('2','test_usrid_3',0,'2018/07/10/20:25');
insert into suc_request values('3','test_usrid_3',1,'2018/07/11/20:25');
insert into suc_request values('4','test_usrid_4',1,'2018/07/8/20:25');
insert into suc_request values('5','test_usrid_4',1,'2018/07/9/20:25');
insert into suc_request values('6','test_usrid_4',1,'2018/07/9/20:25');

--------------------------------suc_request---------------------------------------------

--处于继承过程的物品
--------------------------------suc_process---------------------------------------------

insert into suc_process values('3','2018/07/10/18:00','2018/07/10/22:00',0,0,null);
insert into suc_process values('4','2018/07/10/13:00','2018/07/10/18:00',1,0,'2018/07/09/20:25');
insert into suc_process values('5','2018/07/10/14:00','2018/07/10/20:00',0,1,'2018/07/11/10:13');
insert into suc_process values('6','2018/07/10/8:00','2018/07/10/13:00',1,1,'2018/07/12/14:32');

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
  -- values(USER_ID
  -- suc_title
  -- suc_intro
  -- suc_pic_url
  -- suc_class
  -- suc_publish_time
-- --suc_id设置为自增长，每次新增继承物品，不需要插入suc_id,
-- --真实情况：pic_id是等待用户把书籍图片上传后，服务器保存到本地后，得到的。
-- insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','天天向上 书籍', '好书值得拥有大叔大婶调度阿萨德打阿萨德撒多按时的萨达的阿萨德撒打算啊','./images/123213.jpg','书籍','20180706214950');

  