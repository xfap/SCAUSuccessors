--ANSI����
-- CREATE TABLE successor(
	-- USER_ID VARCHAR2(24) PRIMARY KEY,
  -- username  VARCHAR2(64) NOT NULL,
  -- area_name VARCHAR2(32),
  -- dorm_name VARCHAR2(32)
	-- );
--�̳���	
--------------------------------successor---------------------------------------------
	
insert into successor values ('test_usrid_1', 'user1', '��ɽ��','14��612');
insert into successor values ('test_usrid_2', 'user2', '̩ɽ��','8��410');
insert into successor values ('test_usrid_3', 'user3', '��ɽ��','2��312');
insert into successor values ('test_usrid_4', 'user4', '������','1��212');

--���Գ������� �̳������������
--ʱ��ͼ��״̬��ͼ�ȵȣ��������Ӧ�ã�
--------------------------------successor---------------------------------------------
--���ڷ���״̬����Ʒ ͼƬurl ʹ����Ʒid �� ʱ�� ��������
--------------------------------suc_stuff---------------------------------------------

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','ɽ��M0','ɽ���Я������','./images/1-201807051010.png','����','20180705101023');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','������DX150','������������','./images/2-201807052025.png','����','20180705202534');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_2','�����о','','./images/6-201807092025.png','�ľ�','20180709202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_3','�������','','./images/7-201807102025.png','����','20180710202523');

--------------------------------suc_stuff---------------------------------------------
 -- CREATE TABLE suc_request(
     -- suc_id NUMBER(32) PRIMARY KEY,
     -- user_id VARCHAR2(64) NOT NULL,
     -- comfirm_give_flag NUMBER(1),
     -- request_time VARCHAR2(32),
     -- foreign key (user_id) references successor(user_id) on delete cascade,
     -- --�û���һ�㲻�ᱻע����ɾ�������ǹ���Ա����
     -- foreign key (suc_id) references suc_stuff(suc_id) on delete cascade
-- );
--��������״̬����Ʒ
--------------------------------suc_request---------------------------------------------

insert into suc_request values('1','test_usrid_3',-1,'20180709202512');
insert into suc_request values('2','test_usrid_3',0,'20180710202512');
insert into suc_request values('3','test_usrid_3',1,'20180711202512');
insert into suc_request values('4','test_usrid_4',1,'20180708202523');
insert into suc_request values('5','test_usrid_4',1,'20180709202512');
insert into suc_request values('6','test_usrid_4',1,'20180709202532');

--------------------------------suc_request---------------------------------------------

--���ڼ̳й��̵���Ʒ
--------------------------------suc_process---------------------------------------------

insert into suc_process values('3','20180710180123','20180710220123',0,0,null);
insert into suc_process values('4','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('5','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('6','20180710081123','20180710131123',1,1,'20180712143212');

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
-- --suc_id����Ϊ��������ÿ�������̳���Ʒ������Ҫ����suc_id,
-- --��ʵ�����pic_id�ǵȴ��û����鼮ͼƬ�ϴ��󣬷��������浽���غ󣬵õ��ġ�
-- insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_1','�������� �鼮', '����ֵ��ӵ�д���������Ȱ����´��������ఴʱ������İ����������㰡','./images/123213.jpg','�鼮','20180706214950');

  