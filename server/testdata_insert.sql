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

--new 
insert into successor values ('test_usrid_5', 'user5', '华山区','14栋609');
insert into successor values ('test_usrid_6', 'user6', '嵩山区','6栋606');
insert into successor values ('test_usrid_7', 'user7', '华山区','1栋111');
insert into successor values ('test_usrid_8', 'user8', '泰山区','2栋201');
--可以尝试做出 继承物的生命周期
--时序图、状态机图等等（软件工程应用）
--------------------------------successor---------------------------------------------
--处于发布状态的物品 图片url 使用物品id 和 时间 联合命名
--------------------------------suc_stuff---------------------------------------------

1  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','山灵M0','山灵便携播放器','./images/1-201807051010.png','数码','20180705101023');
2  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','艾巴索DX150','艾巴索播放器','./images/2-201807052025.png','数码','20180705202534');
3  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','四级词汇书','新东方四级单词书','./images/3-201807062025.png','书籍','20180706202512');
4  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','六级词汇书','新东方六级单词书','./images/4-201807072025.png','书籍','20180707202545');
5  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','无印笔盒','','./images/5-201807082025.png','文具','20180708202512');
6  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','三菱笔芯','','./images/6-201807092025.png','文具','20180709202512');
7  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_3','蓝牙鼠标','','./images/7-201807102025.png','数码','20180710202523');
--new

8  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_4','QQ爱','','./images/7-201807102025.png','玩具','20180714202523');
9  insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_4','爱卿','','./images/7-201807102025.png','玩具','20180713112314');

--new 
10 insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_3','名创优品收纳盒','三格收纳盒','./images/3-201807062025.png','生活用品','20180710202512');
11 insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_3','名创优品收纳盒','五格收纳盒','./images/4-201807072025.png','生活用品','20180710203545');
12 insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_4','鸭舌帽','NY鸭舌帽','./images/5-201807082025.png','服饰','20180711202512');
13 insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_4','鸭舌帽','MLB鸭舌帽','./images/7-201807102025.png','服饰','20180711150723');
14 insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_5','鼠标垫','','./images/7-201807102025.png','数码','20180711160723');
15 insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_5','iPhone6S手机壳','全包软壳','./images/7-201807102025.png','数码','20180711152223');
16 insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_5','iPhone6S手机壳','浮雕磨砂壳','./images/7-201807102025.png','数码','20180711163354');

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

insert into suc_request values('1','test_usrid_3',-1,'20180709202512');
insert into suc_request values('2','test_usrid_3',0,'20180710202512');
insert into suc_request values('3','test_usrid_3',1,'20180711202512');
insert into suc_request values('4','test_usrid_4',1,'20180708202523');
insert into suc_request values('5','test_usrid_4',1,'20180709202512');
insert into suc_request values('6','test_usrid_4',1,'20180709202532');

--new 
insert into suc_request values('7','test_usrid_5',1,'20180710212512');
insert into suc_request values('8','test_usrid_5',1,'20180714203845');
insert into suc_request values('9','test_usrid_5',1,'20180713202512');


insert into suc_request values('10','test_usrid_5',0,'20180711150723');
insert into suc_request values('11','test_usrid_6',0,'20180710222512');
insert into suc_request values('12','test_usrid_6',-1,'20180711204545');
insert into suc_request values('13','test_usrid_6',-1,'20180712202512');
insert into suc_request values('14','test_usrid_7',1,'20180712230723');
insert into suc_request values('15','test_usrid_7',1,'20180712150723');
insert into suc_request values('16','test_usrid_7',1,'20180712150723');
--------------------------------suc_request---------------------------------------------

--处于继承过程的物品
--------------------------------suc_process---------------------------------------------

insert into suc_process values('3','20180710180123','20180710220123',0,0,null);
insert into suc_process values('4','20180710131123','20180710181123',0,0,null);
insert into suc_process values('5','20180710141123','20180710201123',0,1,null);
insert into suc_process values('6','20180710081123','20180710131123',0,1,null);

--new 
insert into suc_process values('7','20180710081123','20180710131123',0,1,null);
insert into suc_process values('8','20180710131123','20180710181123',1,0,null);
insert into suc_process values('9','20180710141123','20180710201123',1,0,null);
insert into suc_process values('14','20180710081123','20180710131123',1,0,null);
insert into suc_process values('15','20180710081123','20180710131123',1,1,'20180712143212');
insert into suc_process values('16','20180710081123','20180710131123',1,1,'20180712143212');

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

  