<?php
/**
 * @package     __component_name__.Administrator
 * @subpackage  com___component_name__(lowerCase)
 *
 * @copyright   Copyright (C) 2005 - 2018 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

// No direct access to this file
defined('_JEXEC') or die('Restricted access');


// Get an instance of the controller prefixed by HelloWorld
$controller = JControllerLegacy::getInstance('__component_name__');

// Perform the Request task
$controller->execute(JFactory::getApplication()->input->getCmd('task'));

// Redirect if set by the controller
$controller->redirect();



