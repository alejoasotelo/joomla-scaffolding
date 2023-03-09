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

// Require helper file
JLoader::register('__component_name__(pascalCase)Helper', JPATH_COMPONENT . '/helpers/__component_name__(lowerCase).php');

// Get an instance of the controller prefixed by HelloWorld
$controller = JControllerLegacy::getInstance('__component_name__');

// Perform the Request task
$controller->execute(JFactory::getApplication()->input->get('task'));

// Redirect if set by the controller
$controller->redirect();

require_once __DIR__ . "/php-hot-reloader/src/HotReloader.php"; 
new HotReloader\HotReloader('//127.0.0.1/administrator/components/com___component_name__(lowerCase)/phrwatcher.php');