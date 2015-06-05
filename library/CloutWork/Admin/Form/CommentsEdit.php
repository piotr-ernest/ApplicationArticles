<?php

/**
 * Description of CommentsEdit
 *
 * @author rnest
 */
class CloutWork_Admin_Form_CommentsEdit extends Zend_Form
{

    protected $url = null;

    public function __construct($options = null)
    {
        $this->url = $options;
        parent::__construct($options);
    }

    public function init()
    {
        parent::init();


        $view = Zend_Layout::getMvcInstance()->getView();
        

        $this->setOptions(array('id' => 'commentEditForm'));
        $this->setAction($view->url(array('id' => $this->url['id'], 'page' => $this->url['page']), 'comments-edit'));
        $this->setMethod('post');

        //---------------------------

        $titleNotEmpty = new Zend_Validate_NotEmpty();
        $titleNotEmpty->setMessage('Tytuł komentarza jest wymagany.');

        //---------------------------
        
        $contentNotEmpty = new Zend_Validate_NotEmpty();
        $contentNotEmpty->setMessage('Treść komentarza jest wymagana.');

        //---------------------------


        $this->setDecorators(
                array(
                    'FormElements',
                    array('Form', array('role' => 'form')),
                //'FormErrors'
                )
        );

        $this->setElementDecorators(
                array(
                    'ViewHelper',
                    'Label',
                    array('Errors', array('class' => 'form-errors')),
                    array('HtmlTag', array('tag' => 'div', 'class' => 'form-group')),
                )
        );

        $elements = array(
                    $this->createElement('text', 'title')
                    ->setRequired(true)
                    ->setAttrib('class', 'form-control')
                    ->setAttrib('id', 'title_input')
                    ->setAttrib('autocomplete', 'off')
                    ->addFilter('StringTrim')
                    ->addFilter('StripTags')
                    ->addValidator($titleNotEmpty)
                    ->setLabel('Tytuł komentarza'),
            
                    $this->createElement('textarea', 'content')
                    ->setRequired(true)
                    ->setAttrib('name', 'content')
                    ->addFilter('StringTrim')
                    ->addFilter('StripTags')
                    ->addValidator($contentNotEmpty)
                    ->setAttrib('id', 'comment_content')
                    ->setAttrib('class', 'form-control')
                    ->setLabel('Treść komentarza'),
            
                    $this->createElement('hidden', 'id')
                    ->setIgnore(true),
            
                    $this->createElement('submit', 'Wyślij')
                    ->setAttrib('class', 'btn btn-info')
                    ->setName('Wyślij')
                    ->setValue('Zatwierdź')
                    ->setLabel('Wyślij')
                    ->removeDecorator('Label')
        );

        $this->addElements($elements);
    }

    public function isValid($data)
    {

        parent::isValid($data);
    }

    public function setDefaults($defaults)
    {
        parent::setDefaults($defaults);
    }

}
