drop table successor;
drop table suc_stuff;
drop table suc_request;
drop table suc_process;
CREATE TABLE successor(
	USER_ID VARCHAR2(24) PRIMARY KEY,
  username  VARCHAR2(64) NOT NULL,
  area_name VARCHAR2(32),
  dorm_name VARCHAR2(32)
	);
 CREATE TABLE suc_stuff(
	suc_id VARCHAR2(24) PRIMARY KEY,
  suc_title VARCHAR2(64) NOT NULL,
  suc_intro VARCHAR2(1024),
  suc_pic_url VARCHAR2(32),
  suc_class VARCHAR2(32),
  suc_publish_time VARCHAR2(32)
  );
 
 CREATE TABLE suc_request(
     suc_id VARCHAR2(24) PRIMARY KEY,
     user_id VARCHAR2(24),
     need_flag NUMBER(1),
     comfirm_give_flag NUMBER(1)
);
 CREATE TABLE suc_process(
     suc_id VARCHAR2(24) PRIMARY KEY,
     owner_spare_time_start VARCHAR2(24),
     owner_spare_time_end VARCHAR2(24),
     confirm_recv NUMBER(1),
     confirm_give NUMBER(1),
     complete_time VARCHAR2(24)
);