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

--new LU
insert into successor values ('test_usrid_5', 'user5', '��ɽ��','14��609');
insert into successor values ('test_usrid_6', 'user6', '��ɽ��','6��606');
insert into successor values ('test_usrid_7', 'user7', '��ɽ��','1��111');
insert into successor values ('test_usrid_8', 'user8', '̩ɽ��','2��201');
insert into successor values ('test_usrid_9', 'user9', '��ɽ��','3��301');
insert into successor values ('test_usrid_10', 'user10', '������','4��401');
insert into successor values ('test_usrid_11', 'user11', '��ɽ��','5��501');
insert into successor values ('test_usrid_12', 'user12', '��ɽ��','6��601');
insert into successor values ('test_usrid_13', 'user13', '��ɽ��','7��701');
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
--new

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_4','QQ��','','./images/7-201807102025.png','���','20180714202523');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_4','����','','./images/7-201807102025.png','���','20180713112314');

--new LU
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_5','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_5','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_5','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_5','�������','','./images/7-201807102025.png','����','20180711150723');

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_6','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_6','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_6','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_6','�������','','./images/7-201807102025.png','����','20180711150723');

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_7','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_7','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_7','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_7','�������','','./images/7-201807102025.png','����','20180711150723');

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_8','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_8','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_8','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_8','�������','','./images/7-201807102025.png','����','20180711150723');

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_9','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_9','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_9','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_9','�������','','./images/7-201807102025.png','����','20180711150723');

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_10','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_10','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_10','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_10','�������','','./images/7-201807102025.png','����','20180711150723');

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_11','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_11','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_11','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_11','�������','','./images/7-201807102025.png','����','20180711150723');

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_12','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_12','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_12','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_12','�������','','./images/7-201807102025.png','����','20180711150723');

insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_13','�ļ��ʻ���','�¶����ļ�������','./images/3-201807062025.png','�鼮','20180706202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_13','�����ʻ���','�¶�������������','./images/4-201807072025.png','�鼮','20180707202545');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_13','��ӡ�ʺ�','','./images/5-201807082025.png','�ľ�','20180708202512');
insert into suc_stuff(USER_ID,suc_title,suc_intro,suc_pic_url,suc_class,suc_publish_time) values ('test_usrid_13','�������','','./images/7-201807102025.png','����','20180711150723');
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

--new LU
insert into suc_request values('7','test_usrid_5',1,'20180709202512');
insert into suc_request values('8','test_usrid_5',1,'20180709202545');
insert into suc_request values('9','test_usrid_5',1,'20180709202512');
insert into suc_request values('10','test_usrid_5',1,'20180711150723');

insert into suc_request values('11','test_usrid_6',1,'20180709202512');
insert into suc_request values('12','test_usrid_6',1,'20180709202545');
insert into suc_request values('13','test_usrid_6',1,'20180709202512');
insert into suc_request values('14','test_usrid_6',1,'20180711150723');

insert into suc_request values('15','test_usrid_7',1,'20180709202512');
insert into suc_request values('16','test_usrid_7',1,'20180709202545');
insert into suc_request values('17','test_usrid_7',1,'20180709202512');
insert into suc_request values('18','test_usrid_7',1,'20180711150723');

insert into suc_request values('19','test_usrid_8',1,'20180709202512');
insert into suc_request values('20','test_usrid_8',1,'20180709202545');
insert into suc_request values('21','test_usrid_8',1,'20180709202512');
insert into suc_request values('22','test_usrid_8',1,'20180711150723');

insert into suc_request values('23','test_usrid_9',1,'20180709202512');
insert into suc_request values('24','test_usrid_9',1,'20180709202545');
insert into suc_request values('25','test_usrid_9',1,'20180709202512');
insert into suc_request values('26','test_usrid_9',1,'20180711150723');

insert into suc_request values('27','test_usrid_10',1,'20180709202512');
insert into suc_request values('28','test_usrid_10',1,'20180709202545');
insert into suc_request values('29','test_usrid_10',1,'20180709202512');
insert into suc_request values('30','test_usrid_10',1,'20180711150723');

insert into suc_request values('31','test_usrid_11',1,'20180709202512');
insert into suc_request values('32','test_usrid_11',1,'20180709202545');
insert into suc_request values('33','test_usrid_11',1,'20180709202512');
insert into suc_request values('34','test_usrid_11',1,'20180711150723');

insert into suc_request values('35','test_usrid_12',1,'20180709202512');
insert into suc_request values('36','test_usrid_12',1,'20180709202545');
insert into suc_request values('37','test_usrid_12',1,'20180709202512');
insert into suc_request values('38','test_usrid_12',1,'20180711150723');

insert into suc_request values('39','test_usrid_13',1,'20180709202512');
insert into suc_request values('40','test_usrid_13',1,'20180709202545');
insert into suc_request values('41','test_usrid_13',1,'20180709202512');
insert into suc_request values('42','test_usrid_13',1,'20180711150723');
--------------------------------suc_request---------------------------------------------

--���ڼ̳й��̵���Ʒ
--------------------------------suc_process---------------------------------------------

insert into suc_process values('3','20180710180123','20180710220123',0,0,null);
insert into suc_process values('4','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('5','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('6','20180710081123','20180710131123',1,1,'20180712143212');

--new LU
insert into suc_process values('7','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('8','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('9','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('10','20180710081123','20180710131123',1,1,'20180712143212');

insert into suc_process values('11','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('12','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('13','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('14','20180710081123','20180710131123',1,1,'20180712143212');

insert into suc_process values('15','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('16','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('17','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('18','20180710081123','20180710131123',1,1,'20180712143212');

insert into suc_process values('19','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('20','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('21','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('22','20180710081123','20180710131123',1,1,'20180712143212');

insert into suc_process values('23','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('24','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('25','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('26','20180710081123','20180710131123',1,1,'20180712143212');

insert into suc_process values('27','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('28','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('29','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('30','20180710081123','20180710131123',1,1,'20180712143212');

insert into suc_process values('31','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('32','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('33','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('34','20180710081123','20180710131123',1,1,'20180712143212');

insert into suc_process values('35','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('36','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('37','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('38','20180710081123','20180710131123',1,1,'20180712143212');

insert into suc_process values('39','20180710081123','20180710131123',0,0,'20180712142512');
insert into suc_process values('40','20180710131123','20180710181123',1,0,'20180709202512');
insert into suc_process values('41','20180710141123','20180710201123',0,1,'20180711101312');
insert into suc_process values('42','20180710081123','20180710131123',1,1,'20180712143212');
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

  