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

/**
 * __component_name__List Model
 *
 * @since  0.0.1
 */
class __component_name__Model__items__ extends JModelList
{
	/**
	 * Method to build an SQL query to load the list data.
	 *
	 * @return      string  An SQL query
	 */
	protected function getListQuery()
	{
		// Initialize variables.
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true);

		// Create the base select statement.
		$query->select('*')
                ->from($db->quoteName('#____component_name__(lowerCase)___item__(lowerCase)'));

		return $query;
	}
}