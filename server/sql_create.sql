--ANSI����
drop table suc_process;
drop table suc_request;
drop table suc_stuff;
drop table successor;
drop table suc_stuff_history;
drop sequence suc_id_seq;
CREATE TABLE successor(
	USER_ID VARCHAR2(64) PRIMARY KEY,
  username  VARCHAR2(64) NOT NULL,
  area_name VARCHAR2(32),
  dorm_name VARCHAR2(32)
	);
--�����Ʒ���̳У��ӽ���ʷ����������������ߣ���Ʒ��ȡ���̳У�ֱ��ɾ������������Ϣ����Ҫ����pic_urlɾ��������ͼƬ
 CREATE TABLE suc_stuff(
	suc_id NUMBER(32) PRIMARY KEY,
    USER_ID VARCHAR2(64) NOT NULL,
  suc_title VARCHAR2(128),
  suc_intro VARCHAR2(1024),
  suc_pic_url VARCHAR2(32),
  suc_class VARCHAR2(32),
  suc_publish_time VARCHAR2(32),
  foreign key (user_id) references successor(user_id) on delete cascade
  );
  --��ɼ̳�
  CREATE TABLE suc_stuff_history(
	suc_id NUMBER(32) PRIMARY KEY,
    USER_ID VARCHAR2(64),
  suc_title VARCHAR2(128),
  suc_intro VARCHAR2(1024),
  suc_pic_url VARCHAR2(32),
  suc_class VARCHAR2(32),
  suc_publish_time VARCHAR2(32)
  );
  
 CREATE TABLE suc_request(
     suc_id NUMBER(32),
     user_id VARCHAR2(64),
     confirm_give_flag NUMBER(1),
     request_time VARCHAR2(32),
     primary key(suc_id,user_id), --һ����Ʒ���ܱ����������
     foreign key (user_id) references successor(user_id) on delete cascade,
     --�û���һ�㲻�ᱻע����ɾ�������ǹ���Ա����
     foreign key (suc_id) references suc_stuff(suc_id) on delete cascade
);
--�ж��Ƿ������û�������
--���� ӵ���ߣ��������������������Ʒ����������flag����0 ӵ����ֻ�ܻ�Ӧһ������Ȼ���Զ��ܾ������ˣ�����flagΪ-1
--���� �����ߣ�������������ˣ�flag=-1����֪ͨ�û�����������󱻾ܾ���
--                    ���������ˣ�flag=0����֪ͨ������������û����Ӧ
--                    ���������ˣ�flag=1,��֪ͨ��������������Ӧ�ˣ����ҷ��أ�ʱ�����Ϣ��
 CREATE TABLE suc_process(
     suc_id NUMBER(32) PRIMARY KEY, --��Ʒ�������״̬
     owner_spare_time_start VARCHAR2(32),
     owner_spare_time_end VARCHAR2(32),
     confirm_recv NUMBER(1),
     confirm_give NUMBER(1),
     complete_time VARCHAR2(32),
     foreign key (suc_id) references suc_stuff(suc_id) on delete cascade
);

--�����������Ĵ�����suc_id
create sequence suc_id_seq increment by 1 start with 1;
-- create or replace 
    -- trigger trg_suc_stuff before insert on suc_stuff for each row 
    -- begin 
    -- select suc_id_seq.nextval into :new.suc_id from dual; 
    -- end;