<?php
namespace Home\Controller;

use Think\Controller;
class TreeController extends BaseController {
	
    public function test(){
        echo 123;
        echo 456;
    }
    public function insert_test()
    {
        //实例化数据表
        $Message=M('Message');
        //组装插入的数据
        $data=array();
        $data['wine_name']='啤酒';
        $data['wine_url']='xxx.jpg';
        $data['wine_content']='啤酒很好喝';
        $data['total_likes']=0;
        //插入数据
        $result=$Message->add($data);
        var_dump($result);
        
    }
    public function select_test()
    {
        $Message=M('Message');
        $where=array();
        $where['wine_name']='啤酒';
        $all_messages=$Message->where($where)->select();
        dump($all_messages);
        $all_messages=$Message->where($where)->find();
        dump($all_messages);
        
    }
    public function save_test()
    {
        $Message=M('Message');
        $where=array();
        $where['id']=1;
        $data=array();
        $data['total_likes']=1;
        $result=$Message->where($where)->save($data);
        dump($result);
    }
    public function delete_test()
    {
        $Message=M('Message');
        $where=array();
        $where['id']=2;
        $result=$Message->where($where)->delete();
        dump($result);
    }

}


