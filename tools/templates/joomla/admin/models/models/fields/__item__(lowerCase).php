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

JFormHelper::loadFieldClass('list');

/**
 * __item__ Form Field class for the __component_name__ component
 *
 * @since  0.0.1
 */
class JFormField__item__ extends JFormFieldList
{
	/**
	 * The field type.
	 *
	 * @var         string
	 */
	protected $type = '__item__';

	/**
	 * Method to get a list of options for a list input.
	 *
	 * @return  array  An array of JHtml options.
	 */
	protected function getOptions()
	{
		$db    = JFactory::getDBO();
		$query = $db->getQuery(true);
		$query->select('id, name');
		$query->from('#____component_name__(lowerCase)___item__(lowerCase)');
		$db->setQuery((string) $query);
		$items = $db->loadObjectList();
		$options  = array();

		if ($items) {
			foreach ($items as $item) {
				$options[] = JHtml::_('select.option', $item->id, $item->name);
			}
		}

		$options = array_merge(parent::getOptions(), $options);

		return $options;
	}
}
