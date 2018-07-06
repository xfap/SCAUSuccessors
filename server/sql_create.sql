drop table suc_process;
drop table suc_request;
drop table suc_stuff;
drop table successor;

CREATE TABLE successor(
	USER_ID VARCHAR2(64) PRIMARY KEY,
  username  VARCHAR2(64) NOT NULL,
  area_name VARCHAR2(32),
  dorm_name VARCHAR2(32)
	);
 CREATE TABLE suc_stuff(
	suc_id NUMBER(32) PRIMARY KEY,
    USER_ID VARCHAR2(64),
  suc_title VARCHAR2(64) NOT NULL,
  suc_intro VARCHAR2(1024),
  suc_pic_url VARCHAR2(32),
  suc_class VARCHAR2(32),
  suc_publish_time VARCHAR2(32),
  foreign key (user_id) references successor(user_id) on delete cascade
  );
 
 CREATE TABLE suc_request(
     suc_id NUMBER(32) PRIMARY KEY,
     user_id VARCHAR2(64),
     need_flag NUMBER(1),
     comfirm_give_flag NUMBER(1),
     foreign key (user_id) references successor(user_id) on delete cascade,
     --用户名一般不会被注销，删除，除非管理员操作
     foreign key (suc_id) references suc_stuff(suc_id) on delete cascade
);
 CREATE TABLE suc_process(
     suc_id NUMBER(32) PRIMARY KEY,
     owner_spare_time_start VARCHAR2(24),
     owner_spare_time_end VARCHAR2(24),
     confirm_recv NUMBER(1),
     confirm_give NUMBER(1),
     complete_time VARCHAR2(24),
     foreign key (suc_id) references suc_stuff(suc_id) on delete cascade
);