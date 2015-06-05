<?php

/**
 * Description of CommentsController
 *
 * @author rnest
 */
class CommentsController extends CloutWork_Admin_Controller_Action
{

    public function indexAction()
    {
        $partials = array(
            'partial' => 'app-partials/datatable/comments.phtml',
            'pagination' => 'app-partials/pagination/comments_datatable.phtml'
        );
        
        $datatable = new CloutWork_Admin_DataTable_Standard(new CloutWork_Admin_Model_Datatable_Comments(), $partials);

        $this->view->datatable = $datatable;
    }

    public function sortAction()
    {
        $params = $this->getRequest()->getParams();
        
        return $this->getHelper('redirector')
                        ->gotoRoute(array(
                            'page' => $params['page'],
                            'author' => $params['author'],
                            'title' => $params['title'],
                            'date' => $params['date']
                                ), 'comments');
    }
    
    public function editAction()
    {
        
        $model = new CloutWork_Admin_Model_Comments();
        
        if($this->getRequest()->isPost()){
            
            $post = $this->getRequest()->getParams();
            //desc($post, 1);
            $res = $model->updateComment($post);
            
            if($res > 0){
                $this->info('Komentarz został zmodyfikowany.');
            } else {
                $this->info('Komentarz nie został zmodyfikowany.');
            }
            
            return $this->getHelper('redirector')
                        ->gotoRoute(array(
                            'page' => $post['page'],
                            'id' => $post['id']
                                ), 'comments');
            
        }
        
        $id = $this->view->id = $this->_getParam('id', null);
        $page = $this->view->page = $this->_getParam('page', 1);
        
        $this->view->comment = $comment = $model->getComment($id);
        $form = new CloutWork_Admin_Form_CommentsEdit(array('page' => $page, 'id' => $id));
        $form->setDefaults(array(
            'title' => $comment['title'],
            'content' => $comment['content']
        ));
        
        $this->view->form = $form;
        
    }

}
